import http from "http";
import request from "supertest";
import { MockedFunction } from "vitest";
import { getOptionalEnvVar } from "../env/env";
import * as env from "../env/env";
import { startApolloServer } from "./startApolloServer";

const mockGetOptionalEnvVar = vi.spyOn(
  env,
  "getOptionalEnvVar",
) as MockedFunction<typeof getOptionalEnvVar>;

describe("Server", () => {
  let httpServer: http.Server;

  beforeAll(async () => {
    mockGetOptionalEnvVar.mockReturnValue("6000");

    httpServer = await startApolloServer();
  });

  afterAll(async () => {
    httpServer.close();
  });

  it("should start the server successfully", async () => {
    const response = await request(httpServer).get("/health");
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  it("should set up Apollo Server correctly", async () => {
    const response = await request(httpServer)
      .post("/")
      .send({
        query: `
          query {
            __schema {
              types {
                name
              }
            }
          }
        `,
      });
    expect(response.status).toBe(200);
    expect(response.body.data.__schema.types).toBeDefined();
  });
});
