import { shutdown } from "../logging";

const log4jsPlugin = {
  async serverWillStart() {
    return {
      async serverWillStop() {
        shutdown();
      },
    };
  },
};

export { log4jsPlugin };
