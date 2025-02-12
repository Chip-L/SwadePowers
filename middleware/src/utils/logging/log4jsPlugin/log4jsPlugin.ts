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

export default log4jsPlugin;
