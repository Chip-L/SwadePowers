import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const getRequiredEnvVar = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is required`);
  }
  return value;
};

export const getOptionalEnvVar = (key: string, defaultValue = ""): string => {
  const value = process.env[key];
  return value || defaultValue;
};
