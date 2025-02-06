import gql from "graphql-tag";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { Resolvers } from "../types";
import { powerResolvers, powersTypedef } from "./Powers";

const base = gql`
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }
`;

export const typeDefs = mergeTypeDefs([base, powersTypedef]);
export const resolvers: Resolvers = {
  ...powerResolvers,
};
