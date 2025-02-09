import gql from "graphql-tag";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { Resolvers } from "../types";
import { powerResolvers, powersTypedef } from "./Powers";

// const powers = readFileSync(path.resolve(__dirname, "./powers.graphql"), {
//   encoding: "utf-8",
// });

// const sources = readFileSync(path.resolve(__dirname, "./sources.graphql"), {
//   encoding: "utf-8",
// });

// export const typeDefs = gql(powers + sources);

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
