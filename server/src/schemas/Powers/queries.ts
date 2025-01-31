import { powersDS } from "../../dataSources";
import { QueryResolvers } from "../../types";

export const query: QueryResolvers = {
  getPowers: () => {
    return powersDS;
  },
  getPower: (_, { id }) => {
    return powersDS.find((power) => power.id === id);
  },
};
