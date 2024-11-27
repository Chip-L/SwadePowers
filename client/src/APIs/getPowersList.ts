import { gql } from "../__generated__";

export const GET_POWER_LIST = gql(`query GetPowers {
  getPowers {
    id
    name
    alternateName
    relatedPowers
    rank
    powerPoints
    range
    rangeMultiplier
    duration
    durationMultiplier
    summary
    trappings
    fullDescription
    pageNum
    powerModifiers {
      id
      name
      description
      shortModifierName
      cost
      takeMultiple
      isRequired
    }
  }
}`);
