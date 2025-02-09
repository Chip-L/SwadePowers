/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type MutationResponse = {
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Power = {
  __typename?: 'Power';
  alternateName?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  durationMultiplier?: Maybe<Scalars['Int']['output']>;
  fullDescription?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pageNum?: Maybe<Scalars['Int']['output']>;
  powerModifiers?: Maybe<Array<Maybe<PowerModifier>>>;
  powerPoints?: Maybe<Scalars['String']['output']>;
  range?: Maybe<Scalars['String']['output']>;
  rangeMultiplier?: Maybe<Scalars['Int']['output']>;
  rank?: Maybe<Rank>;
  relatedPowers?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  summary?: Maybe<Scalars['String']['output']>;
  trappings?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PowerModifier = {
  __typename?: 'PowerModifier';
  cost?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isRequired?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  shortModifierName?: Maybe<Scalars['String']['output']>;
  takeMultiple?: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getPower?: Maybe<Power>;
  getPowers: Array<Power>;
};


export type QueryGetPowerArgs = {
  id: Scalars['ID']['input'];
};

export enum Rank {
  Heroic = 'HEROIC',
  Legendary = 'LEGENDARY',
  Novice = 'NOVICE',
  Seasoned = 'SEASONED',
  Veteran = 'VETERAN'
}

export type GetPowersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPowersQuery = { __typename?: 'Query', getPowers: Array<{ __typename?: 'Power', id: string, name: string, alternateName?: string | null, relatedPowers?: Array<string | null> | null, rank?: Rank | null, powerPoints?: string | null, range?: string | null, rangeMultiplier?: number | null, duration?: string | null, durationMultiplier?: number | null, summary?: string | null, trappings?: Array<string | null> | null, fullDescription?: string | null, pageNum?: number | null, powerModifiers?: Array<{ __typename?: 'PowerModifier', id: string, name: string, description?: string | null, shortModifierName?: string | null, cost?: string | null, takeMultiple?: boolean | null, isRequired?: boolean | null } | null> | null }> };


export const GetPowersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPowers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPowers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternateName"}},{"kind":"Field","name":{"kind":"Name","value":"relatedPowers"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"powerPoints"}},{"kind":"Field","name":{"kind":"Name","value":"range"}},{"kind":"Field","name":{"kind":"Name","value":"rangeMultiplier"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"durationMultiplier"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"trappings"}},{"kind":"Field","name":{"kind":"Name","value":"fullDescription"}},{"kind":"Field","name":{"kind":"Name","value":"pageNum"}},{"kind":"Field","name":{"kind":"Name","value":"powerModifiers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"shortModifierName"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"takeMultiple"}},{"kind":"Field","name":{"kind":"Name","value":"isRequired"}}]}}]}}]}}]} as unknown as DocumentNode<GetPowersQuery, GetPowersQueryVariables>;