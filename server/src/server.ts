import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PowerModifiersAPI, PowersAPI } from "./dataSources/";
import { resolvers, typeDefs } from "./schemas";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: process.env.NODE_ENV !== "production",
  });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;

      return {
        dataSources: {
          powersAPI: new PowersAPI({ cache }),
          powerModifiersAPI: new PowerModifiersAPI({ cache }),
        },
      };
    },
  });

  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
    introspection: ${process.env.NODE_ENV !== "production"}
  `);
}

startApolloServer();
