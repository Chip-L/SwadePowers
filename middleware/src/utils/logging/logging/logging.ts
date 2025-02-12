import log4js from "log4js";
import { getOptionalEnvVar } from "../../env";

export type Logger = Omit<log4js.Logger, "log" | "_log">;

const init = () => {
  const logLevel = getOptionalEnvVar("LOG_LEVEL", "info");
  const config = {
    appenders: {
      console: { type: "stdout" },
    },
    categories: {
      default: { appenders: ["console"], level: logLevel },
    },
  };

  log4js.configure(config);
};

export const createLogger = (category?: string) => {
  if (!log4js.isConfigured()) {
    init();
  }
  return log4js.getLogger(category) as Logger;
};

export const shutdown = log4js.shutdown;
