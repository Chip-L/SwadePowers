import { Rank, Scalars } from ".";

type Id = Scalars["ID"]["output"];

export type PowerModel = {
  id: Id;
  name: string;
  alternateName?: string;
  relatedPowers?: Id[];
  rank?: Rank.Novice;
  powerPoints?: string;
  range?: string;
  rangeMultiplier?: number;
  duration?: string;
  durationMultiplier?: number;
  summary?: string;
  trappings?: string[];
  fullDescription: string;
  pageNum: number;
  powerModifiers: string[];
};
