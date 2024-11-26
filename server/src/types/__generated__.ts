import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']['output']>;
  book: Scalars['String']['output'];
  book_id: Scalars['ID']['output'];
  isbn?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
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
  powerModifiers?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
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
  isRequired?: Maybe<Scalars['Boolean']['output']>;
  modifierName: Scalars['String']['output'];
  modifier_id: Scalars['ID']['output'];
  shortModifierName?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Source>;
  takeMultiple?: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getPower?: Maybe<Power>;
  getPowers: Array<Power>;
};


export type QueryGetPowerArgs = {
  power_id: Scalars['ID']['input'];
};

export enum Rank {
  Heroic = 'HEROIC',
  Legendary = 'LEGENDARY',
  Novice = 'NOVICE',
  Seasoned = 'SEASONED',
  Veteran = 'VETERAN'
}

export type Source = {
  __typename?: 'Source';
  book?: Maybe<Book>;
  pageNumber?: Maybe<Scalars['Int']['output']>;
  source_id: Scalars['ID']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Book: ResolverTypeWrapper<Book>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Power: ResolverTypeWrapper<Power>;
  PowerModifier: ResolverTypeWrapper<PowerModifier>;
  Query: ResolverTypeWrapper<{}>;
  Rank: Rank;
  Source: ResolverTypeWrapper<Source>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Book: Book;
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Power: Power;
  PowerModifier: PowerModifier;
  Query: {};
  Source: Source;
  String: Scalars['String']['output'];
};

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  book?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  book_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isbn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PowerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Power'] = ResolversParentTypes['Power']> = {
  alternateName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  durationMultiplier?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fullDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pageNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  powerModifiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  powerPoints?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  range?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rangeMultiplier?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Rank']>, ParentType, ContextType>;
  relatedPowers?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trappings?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PowerModifierResolvers<ContextType = any, ParentType extends ResolversParentTypes['PowerModifier'] = ResolversParentTypes['PowerModifier']> = {
  cost?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isRequired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  modifierName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  modifier_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shortModifierName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['Source']>, ParentType, ContextType>;
  takeMultiple?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getPower?: Resolver<Maybe<ResolversTypes['Power']>, ParentType, ContextType, RequireFields<QueryGetPowerArgs, 'power_id'>>;
  getPowers?: Resolver<Array<ResolversTypes['Power']>, ParentType, ContextType>;
};

export type SourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Source'] = ResolversParentTypes['Source']> = {
  book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType>;
  pageNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  source_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Book?: BookResolvers<ContextType>;
  Power?: PowerResolvers<ContextType>;
  PowerModifier?: PowerModifierResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Source?: SourceResolvers<ContextType>;
};

