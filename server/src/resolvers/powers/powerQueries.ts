import { powers } from "../../dataSources/powers";
import { QueryResolvers } from "../../types";

export const powerQuery: QueryResolvers = {
  getPowers: () => {
    return powers;
  },
};
