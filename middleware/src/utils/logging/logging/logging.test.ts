import * as env from "../../env";
import { createLogger } from "./logging";

let isLog4jsConfigured = false;
const mockConfigured = vi.hoisted(() =>
  vi.fn(() => (isLog4jsConfigured = true)),
);
const mockIsConfigured = vi.hoisted(() => vi.fn(() => isLog4jsConfigured));
const mockGetLogger = vi.hoisted(() => vi.fn());
vi.mock("log4js", () => ({
  default: {
    configure: mockConfigured,
    isConfigured: mockIsConfigured,
    getLogger: mockGetLogger,
  },
}));

const getOptionalEnvVarSpy = vi.spyOn(env, "getOptionalEnvVar");

describe("Logging", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    isLog4jsConfigured = false;
    getOptionalEnvVarSpy.mockReturnValue("info");
  });

  describe("createLogger", () => {
    it("initializes log4js with default config", () => {
      createLogger();

      expect(mockConfigured).toHaveBeenCalledWith(
        expect.objectContaining({
          categories: expect.objectContaining({
            default: expect.objectContaining({ level: "info" }),
          }),
        }),
      );
    });

    it("initializes log4js with LOG_LEVEL config", () => {
      getOptionalEnvVarSpy.mockReturnValueOnce("trace");
      createLogger();
      expect(mockConfigured).toHaveBeenCalledWith(
        expect.objectContaining({
          categories: expect.objectContaining({
            default: expect.objectContaining({ level: "trace" }),
          }),
        }),
      );
    });

    it("only initializes log4js in the first call", () => {
      createLogger();
      createLogger();
      expect(mockConfigured).toHaveBeenCalledTimes(1);
    });

    it("calls getLogger for the given category", () => {
      const category = "test";
      createLogger(category);
      expect(mockGetLogger).toHaveBeenCalledWith(category);
    });
  });
});
