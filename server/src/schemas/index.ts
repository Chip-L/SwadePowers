import gql from "graphql-tag";
import { readFileSync } from "fs";
import path from "path";

const powers = readFileSync(path.resolve(__dirname, "./powers.graphql"), {
  encoding: "utf-8",
});

const sources = readFileSync(path.resolve(__dirname, "./sources.graphql"), {
  encoding: "utf-8",
});

export const typeDefs = gql(powers + sources);
