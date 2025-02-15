import http from "http";
import request from "supertest";
import { MockedFunction } from "vitest";
import { getOptionalEnvVar } from "../env/env";
import * as env from "../env/env";
import * as logging from "../logging";
import { startApolloServer } from "./startApolloServer";

const mockGetOptionalEnvVar = vi.spyOn(
  env,
  "getOptionalEnvVar",
) as MockedFunction<typeof getOptionalEnvVar>;
mockGetOptionalEnvVar.mockReturnValue("info");

const loggerSpy = vi.spyOn(logging, "createLogger").mockReturnValue({
  info: vi.fn(),
  error: vi.fn(),
} as unknown as logging.Logger);

describe("Server", () => {
  let httpServer: http.Server;

  beforeAll(async () => {
    mockGetOptionalEnvVar.mockReturnValueOnce("6000");
    // .mockReturnValue("info");

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
      .post("/apollo")
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

  it("returns a formatted error", async () => {
    const response = await request(httpServer)
      .post("/apollo")
      .send({
        query: `
          query {
            nonExistentField
          }
        `,
      });
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
    expect(loggerSpy).toHaveBeenCalled();
  });
});
