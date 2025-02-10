import { Resolvers } from "../../types";
// import { powerMutation } from "./mutations";
import { power } from "./power";
import { query } from "./queries";

export { default as powersTypedef } from "./typeDefs";

export const powerResolvers: Resolvers = {
  Query: query,
  // Mutation: powerMutation,
  Power: power,
};
