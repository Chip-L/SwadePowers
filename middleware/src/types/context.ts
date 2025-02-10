import { PowerModifiersAPI, PowersAPI } from "../dataSources";

export type Context = {
  dataSources: {
    powersAPI: PowersAPI;
    powerModifiersAPI: PowerModifiersAPI;
  };
};
