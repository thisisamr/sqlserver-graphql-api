import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Address = {
  __typename?: 'Address';
  Description?: Maybe<Scalars['String']>;
  DistrictId?: Maybe<Scalars['Int']>;
  Id?: Maybe<Scalars['ID']>;
  UserProfileId?: Maybe<Scalars['Int']>;
};

export type AspNetUser = {
  __typename?: 'AspNetUser';
  accessfailedcount?: Maybe<Scalars['Int']>;
  addeddate?: Maybe<Scalars['Date']>;
  addressid?: Maybe<Scalars['Int']>;
  arabicfullname?: Maybe<Scalars['String']>;
  concurrencystamp?: Maybe<Scalars['String']>;
  dateofbirth?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  emailconfirmed?: Maybe<Scalars['Boolean']>;
  firstlogin?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  lockoutenabled?: Maybe<Scalars['Boolean']>;
  lockoutendl?: Maybe<Scalars['Date']>;
  makerid?: Maybe<Scalars['String']>;
  modifieddate?: Maybe<Scalars['Date']>;
  normalizedemail?: Maybe<Scalars['String']>;
  normalizedusername?: Maybe<Scalars['String']>;
  passwordhash?: Maybe<Scalars['String']>;
  phonenumber?: Maybe<Scalars['String']>;
  phonenumberconfirmed?: Maybe<Scalars['Boolean']>;
  securitystamp?: Maybe<Scalars['String']>;
  sync_status?: Maybe<Scalars['Int']>;
  twofactorenabled?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
};

export type Dummy = {
  AccessFailedCount?: InputMaybe<Scalars['Int']>;
  AddedDate?: InputMaybe<Scalars['Date']>;
  AddressId?: InputMaybe<Scalars['Int']>;
  ArabicFullName?: InputMaybe<Scalars['String']>;
  ConcurrencyStamp?: InputMaybe<Scalars['String']>;
  DateOfBirth?: InputMaybe<Scalars['Date']>;
  Email?: InputMaybe<Scalars['String']>;
  EmailConfirmed?: InputMaybe<Scalars['Boolean']>;
  FirstLogIn?: InputMaybe<Scalars['Boolean']>;
  Id: Scalars['String'];
  LockoutEnabled?: InputMaybe<Scalars['Boolean']>;
  LockoutEnd?: InputMaybe<Scalars['Date']>;
  MakerId?: InputMaybe<Scalars['String']>;
  ModifiedDate?: InputMaybe<Scalars['Date']>;
  NormalizedEmail?: InputMaybe<Scalars['String']>;
  NormalizedUserName?: InputMaybe<Scalars['String']>;
  PasswordHash?: InputMaybe<Scalars['String']>;
  PhoneNumber?: InputMaybe<Scalars['String']>;
  PhoneNumberConfirmed?: InputMaybe<Scalars['Boolean']>;
  SecurityStamp?: InputMaybe<Scalars['String']>;
  SyncStatus?: InputMaybe<Scalars['Int']>;
  TwoFactorEnabled?: InputMaybe<Scalars['Boolean']>;
  UserName?: InputMaybe<Scalars['String']>;
};

export type DummyReq = {
  AddedDate?: InputMaybe<Scalars['Date']>;
  Area?: InputMaybe<Scalars['Float']>;
  CreatedBy?: InputMaybe<Scalars['String']>;
  CurrentStatus?: InputMaybe<Scalars['Int']>;
  Id: Scalars['Int'];
  ModifiedDate?: InputMaybe<Scalars['Date']>;
  Price?: InputMaybe<Scalars['Float']>;
  RequeStstatus: Scalars['Int'];
  RequestNumber?: InputMaybe<Scalars['String']>;
  RequestStatus?: InputMaybe<Scalars['Int']>;
  UnitType: Scalars['Int'];
  UpdatedBy?: InputMaybe<Scalars['String']>;
  UserId?: InputMaybe<Scalars['String']>;
};

export type Edge = {
  __typename?: 'Edge';
  cursor?: Maybe<Scalars['Int']>;
  node?: Maybe<Request>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addDummyRequestsData?: Maybe<Scalars['String']>;
  addDummyUserData?: Maybe<Scalars['String']>;
};


export type MutationAddDummyRequestsDataArgs = {
  inputs: Array<DummyReq>;
};


export type MutationAddDummyUserDataArgs = {
  inputs: Array<Dummy>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  newRequestsQuery?: Maybe<Response>;
  newUsersQuery?: Maybe<UserResponse>;
  requestsQuery?: Maybe<Response>;
  usersQuery?: Maybe<UserResponse>;
};


export type QueryNewRequestsQueryArgs = {
  after?: InputMaybe<Scalars['Int']>;
  afterDate: Scalars['Date'];
  first: Scalars['Int'];
};


export type QueryNewUsersQueryArgs = {
  after?: InputMaybe<Scalars['String']>;
  afterDate: Scalars['Date'];
  first: Scalars['Int'];
};


export type QueryRequestsQueryArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first: Scalars['Int'];
};


export type QueryUsersQueryArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};

export type Request = {
  __typename?: 'Request';
  RequestStatus?: Maybe<Scalars['Int']>;
  addeddate?: Maybe<Scalars['Date']>;
  area?: Maybe<Scalars['Float']>;
  createdby?: Maybe<Scalars['String']>;
  currentstatus?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  modifieddate?: Maybe<Scalars['Date']>;
  price?: Maybe<Scalars['Float']>;
  requestnumber?: Maybe<Scalars['String']>;
  requeststatus: Scalars['Int'];
  unittype: Scalars['Int'];
  updatedby?: Maybe<Scalars['String']>;
  user?: Maybe<AspNetUser>;
  userid?: Maybe<Scalars['String']>;
};

export type Response = {
  __typename?: 'Response';
  edges?: Maybe<Array<Maybe<Edge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum Role {
  Admin = 'ADMIN',
  Guest = 'GUEST',
  Member = 'MEMBER'
}

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<AspNetUser>;
};

export type UserPageInfo = {
  __typename?: 'UserPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo?: Maybe<UserPageInfo>;
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
  Address: ResolverTypeWrapper<Address>;
  AspNetUser: ResolverTypeWrapper<AspNetUser>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Dummy: Dummy;
  DummyReq: DummyReq;
  Edge: ResolverTypeWrapper<Edge>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  Request: ResolverTypeWrapper<Request>;
  Response: ResolverTypeWrapper<Response>;
  Role: Role;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserPageInfo: ResolverTypeWrapper<UserPageInfo>;
  UserResponse: ResolverTypeWrapper<UserResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  AspNetUser: AspNetUser;
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  Dummy: Dummy;
  DummyReq: DummyReq;
  Edge: Edge;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  PageInfo: PageInfo;
  Query: {};
  Request: Request;
  Response: Response;
  String: Scalars['String'];
  User: User;
  UserEdge: UserEdge;
  UserPageInfo: UserPageInfo;
  UserResponse: UserResponse;
};

export type ConstraintDirectiveArgs = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  exclusiveMax?: Maybe<Scalars['Float']>;
  exclusiveMin?: Maybe<Scalars['Float']>;
  format?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  maxLength?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Float']>;
  minLength?: Maybe<Scalars['Int']>;
  multipleOf?: Maybe<Scalars['Float']>;
  notContains?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  uniqueTypeName?: Maybe<Scalars['String']>;
};

export type ConstraintDirectiveResolver<Result, Parent, ContextType = any, Args = ConstraintDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  Description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DistrictId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  UserProfileId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AspNetUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AspNetUser'] = ResolversParentTypes['AspNetUser']> = {
  accessfailedcount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  addeddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  addressid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  arabicfullname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  concurrencystamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateofbirth?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailconfirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstlogin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lockoutenabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lockoutendl?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  makerid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modifieddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  normalizedemail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  normalizedusername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passwordhash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phonenumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phonenumberconfirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  securitystamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sync_status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  twofactorenabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type EdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Edge'] = ResolversParentTypes['Edge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Request']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addDummyRequestsData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationAddDummyRequestsDataArgs, 'inputs'>>;
  addDummyUserData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationAddDummyUserDataArgs, 'inputs'>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  newRequestsQuery?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<QueryNewRequestsQueryArgs, 'afterDate' | 'first'>>;
  newUsersQuery?: Resolver<Maybe<ResolversTypes['UserResponse']>, ParentType, ContextType, RequireFields<QueryNewUsersQueryArgs, 'afterDate' | 'first'>>;
  requestsQuery?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<QueryRequestsQueryArgs, 'first'>>;
  usersQuery?: Resolver<Maybe<ResolversTypes['UserResponse']>, ParentType, ContextType, RequireFields<QueryUsersQueryArgs, 'first'>>;
};

export type RequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['Request'] = ResolversParentTypes['Request']> = {
  RequestStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  addeddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  area?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdby?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentstatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  modifieddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  requestnumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requeststatus?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unittype?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedby?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['AspNetUser']>, ParentType, ContextType>;
  userid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['Edge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['AspNetUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPageInfo'] = ResolversParentTypes['UserPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserResponse'] = ResolversParentTypes['UserResponse']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['UserPageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  AspNetUser?: AspNetUserResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Edge?: EdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Request?: RequestResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserPageInfo?: UserPageInfoResolvers<ContextType>;
  UserResponse?: UserResponseResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  constraint?: ConstraintDirectiveResolver<any, any, ContextType>;
};
