import { getOptionalEnvVar, getRequiredEnvVar } from "./env";

describe("env", () => {
  const validVarName = "var1";
  const varValue = "value1";
  const invalidVarName = "INVALID_VAR";

  beforeEach(() => {
    vi.stubEnv(validVarName, varValue);
  });
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  describe("getRequiredEnvVar", () => {
    it("should return the value of the environment variable", () => {
      const result = getRequiredEnvVar(validVarName);
      expect(result).toEqual(varValue);
    });

    it("should throw an error if the environment variable is not set", () => {
      expect(() => getRequiredEnvVar(invalidVarName)).toThrow(
        `Environment variable ${invalidVarName} is required`,
      );
    });
  });

  describe("getOptionalEnvVar", () => {
    it("should return the value of the environment variable", () => {
      const result = getOptionalEnvVar(validVarName);
      expect(result).toEqual(varValue);
    });

    it("should return the default value if the environment variable is not set", () => {
      const result = getOptionalEnvVar(invalidVarName, "default");
      expect(result).toEqual("default");
    });

    it("should return an empty string if the default variable is not set", () => {
      const result = getOptionalEnvVar(invalidVarName);
      expect(result).toEqual("");
    });
  });
});
