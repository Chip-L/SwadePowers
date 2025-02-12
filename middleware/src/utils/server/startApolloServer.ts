import cors from "cors";
import express from "express";
import http from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { PowerModifiersAPI, PowersAPI } from "../../dataSources/";
import { resolvers, typeDefs } from "../../schemas";
import { Context } from "../../types";
import { getOptionalEnvVar } from "../env/env";

const startApolloServer = async () => {
  const port = getOptionalEnvVar("API_PORT", "4000");

  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.get("/health", (_, res) => {
    res.status(200).json({ status: "ok" });
  });

  app.use(
    "/",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async () => {
        const cache = server;
        return {
          dataSources: {
            powersAPI: new PowersAPI(cache),
            powerModifiersAPI: new PowerModifiersAPI(cache),
          },
        };
      },
    }),
  );

  await new Promise<void>((resolve) => httpServer.listen(port, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}/`);

  return httpServer;
};

export { startApolloServer };
