import { Resolvers } from "../types";
import { powerQuery, powerResolvers } from "./powers";

export const resolvers: Resolvers = {
  Query: { ...powerQuery },
  // Mutation: {},
  Power: { ...powerResolvers },
};
