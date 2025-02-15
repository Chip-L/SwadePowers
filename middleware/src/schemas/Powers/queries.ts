import { QueryResolvers } from "../../types";

export const query: QueryResolvers = {
  getPowers: async (_, __, { dataSources }) => {
    return await dataSources.powersAPI.getPowers();
  },
  getPower: async (_, { id }, { dataSources }) => {
    return await dataSources.powersAPI.getPowerById(id);
  },
};
