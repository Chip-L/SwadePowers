import gql from "graphql-tag";

export default gql`
  enum Rank {
    NOVICE
    SEASONED
    VETERAN
    HEROIC
    LEGENDARY
  }

  type Power {
    id: ID!
    name: String!
    alternateName: String
    relatedPowers: [ID]
    rank: Rank
    powerPoints: String
    range: String
    rangeMultiplier: Int
    duration: String
    durationMultiplier: Int
    summary: String
    trappings: [String]
    fullDescription: String
    pageNum: Int
    powerModifiers: [PowerModifier]
  }

  type PowerModifier {
    id: ID!
    name: String!
    description: String
    shortModifierName: String
    cost: String
    takeMultiple: Boolean
    # isRequired can take the place of the powerPoints==="special" in a Power
    isRequired: Boolean
    # source: Source
  }

  type Query {
    getPowers: [Power!]!
    getPower(id: ID!): Power
  }
`;
