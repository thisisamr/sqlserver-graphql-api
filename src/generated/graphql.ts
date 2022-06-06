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
  addeddate?: Maybe<Scalars['Date']>;
  apartment_number?: Maybe<Scalars['Int']>;
  createdby?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  districtid?: Maybe<Scalars['Int']>;
  floor_number?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  modifieddate?: Maybe<Scalars['Date']>;
  property_number?: Maybe<Scalars['String']>;
  regionid?: Maybe<Scalars['Int']>;
  requestid?: Maybe<Scalars['Int']>;
  streetname?: Maybe<Scalars['String']>;
  sync_status?: Maybe<Scalars['Int']>;
  unique_mark?: Maybe<Scalars['String']>;
  updatedby?: Maybe<Scalars['String']>;
};

export type AddressEdge = {
  __typename?: 'AddressEdge';
  cursor?: Maybe<Scalars['Int']>;
  node?: Maybe<Address>;
};

export type AddressResponse = {
  __typename?: 'AddressResponse';
  edges?: Maybe<Array<Maybe<AddressEdge>>>;
  pageInfo?: Maybe<PageInfo>;
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
  Createdby?: InputMaybe<Scalars['String']>;
  CurrentStatus?: InputMaybe<Scalars['Int']>;
  HasPriceDifference?: InputMaybe<Scalars['Boolean']>;
  Id?: InputMaybe<Scalars['ID']>;
  IsArchived?: InputMaybe<Scalars['Boolean']>;
  IsPaid?: InputMaybe<Scalars['Boolean']>;
  ModifiedDate?: InputMaybe<Scalars['Date']>;
  Price?: InputMaybe<Scalars['Float']>;
  RequestNumber?: InputMaybe<Scalars['String']>;
  RequestStatus?: InputMaybe<Scalars['Int']>;
  UnitType: Scalars['Int'];
  UpdatedBy?: InputMaybe<Scalars['String']>;
  UserId?: InputMaybe<Scalars['String']>;
  areatype?: InputMaybe<Scalars['Int']>;
  haspricedifference?: InputMaybe<Scalars['Boolean']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  ispaid?: InputMaybe<Scalars['Boolean']>;
  syncstatus?: InputMaybe<Scalars['Int']>;
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
  inputs?: InputMaybe<Array<InputMaybe<DummyReq>>>;
};


export type MutationAddDummyUserDataArgs = {
  inputs?: InputMaybe<Array<InputMaybe<Dummy>>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
};

export type PaymentTrasnsactionResponse = {
  __typename?: 'PaymentTrasnsactionResponse';
  edges?: Maybe<Array<Maybe<PaymenttrasnsactionEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Paymenttrasnsaction = {
  __typename?: 'Paymenttrasnsaction';
  addeddate?: Maybe<Scalars['Date']>;
  createdby?: Maybe<Scalars['String']>;
  fawryfees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  merchantrefnum?: Maybe<Scalars['String']>;
  modifieddate?: Maybe<Scalars['Date']>;
  orderstatus?: Maybe<Scalars['Int']>;
  paymentamount?: Maybe<Scalars['Float']>;
  paymentmethod?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  referencenumber?: Maybe<Scalars['String']>;
  refundedamount?: Maybe<Scalars['Float']>;
  requestid?: Maybe<Scalars['Int']>;
  statuscode?: Maybe<Scalars['String']>;
  statusdescription?: Maybe<Scalars['String']>;
  sync_status?: Maybe<Scalars['Int']>;
  transactiontype?: Maybe<Scalars['Int']>;
  updatedby?: Maybe<Scalars['String']>;
  userid?: Maybe<Scalars['String']>;
};

export type PaymenttrasnsactionEdge = {
  __typename?: 'PaymenttrasnsactionEdge';
  cursor?: Maybe<Scalars['Int']>;
  node?: Maybe<Paymenttrasnsaction>;
};

export type Query = {
  __typename?: 'Query';
  addressesQuery?: Maybe<AddressResponse>;
  newRequestsQuery?: Maybe<Response>;
  newUsersQuery?: Maybe<UserResponse>;
  paymenttrasnsactionsQuery?: Maybe<PaymentTrasnsactionResponse>;
  requestsQuery?: Maybe<Response>;
  shippingordersQuery?: Maybe<ShippingOrderResponse>;
  userprofilesQuery?: Maybe<UserProfileResponse>;
  usersQuery?: Maybe<UserResponse>;
};


export type QueryAddressesQueryArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first: Scalars['Int'];
};


export type QueryNewRequestsQueryArgs = {
  after?: InputMaybe<Scalars['Int']>;
  afterDate: Scalars['Date'];
  first: Scalars['Int'];
  id: Scalars['Int'];
};


export type QueryNewUsersQueryArgs = {
  after?: InputMaybe<Scalars['String']>;
  afterDate: Scalars['Date'];
  first: Scalars['Int'];
};


export type QueryPaymenttrasnsactionsQueryArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first: Scalars['Int'];
};


export type QueryRequestsQueryArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first: Scalars['Int'];
};


export type QueryShippingordersQueryArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first: Scalars['Int'];
};


export type QueryUserprofilesQueryArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first: Scalars['Int'];
};


export type QueryUsersQueryArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};

export type Request = {
  __typename?: 'Request';
  AreaType?: Maybe<Scalars['Int']>;
  HasPriceDifference?: Maybe<Scalars['Boolean']>;
  IsArchived?: Maybe<Scalars['Boolean']>;
  IsPaid?: Maybe<Scalars['Boolean']>;
  SyncStatus?: Maybe<Scalars['Int']>;
  SyncStatusSa?: Maybe<Scalars['Int']>;
  UpdatedBy?: Maybe<Scalars['String']>;
  addeddate?: Maybe<Scalars['Date']>;
  area?: Maybe<Scalars['Float']>;
  areatype?: Maybe<Scalars['Int']>;
  createdby?: Maybe<Scalars['String']>;
  currentstatus?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  modifieddate?: Maybe<Scalars['Date']>;
  price?: Maybe<Scalars['Float']>;
  requestnumber?: Maybe<Scalars['String']>;
  requeststatus?: Maybe<Scalars['Int']>;
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

export type ShippingOrderResponse = {
  __typename?: 'ShippingOrderResponse';
  edges?: Maybe<Array<Maybe<ShippingorderEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Shippingorder = {
  __typename?: 'Shippingorder';
  addeddate?: Maybe<Scalars['Date']>;
  apartmentnumber?: Maybe<Scalars['Int']>;
  createdby?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  districtid?: Maybe<Scalars['Int']>;
  extracopiesprice?: Maybe<Scalars['Float']>;
  floornumber?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  modifieddate?: Maybe<Scalars['Date']>;
  numberofcopies?: Maybe<Scalars['Int']>;
  officeid?: Maybe<Scalars['Int']>;
  orderstatus?: Maybe<Scalars['Int']>;
  propertynumber?: Maybe<Scalars['Int']>;
  regionid?: Maybe<Scalars['Int']>;
  requestid?: Maybe<Scalars['Int']>;
  shippingcenter_adress?: Maybe<Scalars['String']>;
  shippingprice?: Maybe<Scalars['Float']>;
  shippingtype?: Maybe<Scalars['Int']>;
  shippingtype_name?: Maybe<Scalars['String']>;
  streetname?: Maybe<Scalars['String']>;
  sync_status?: Maybe<Scalars['Int']>;
  uniquemark?: Maybe<Scalars['String']>;
  updatedby?: Maybe<Scalars['String']>;
};

export type ShippingorderEdge = {
  __typename?: 'ShippingorderEdge';
  cursor?: Maybe<Scalars['Int']>;
  node?: Maybe<Shippingorder>;
};

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

export type UserProfileResponse = {
  __typename?: 'UserProfileResponse';
  edges?: Maybe<Array<Maybe<UserprofileEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo?: Maybe<UserPageInfo>;
};

export type Userprofile = {
  __typename?: 'Userprofile';
  addeddate?: Maybe<Scalars['Date']>;
  createdby?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  haswhatsapp?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  modifieddate?: Maybe<Scalars['Date']>;
  phonenumbertype?: Maybe<Scalars['Int']>;
  sync_status?: Maybe<Scalars['Int']>;
  telephonenumber?: Maybe<Scalars['String']>;
  updatedby?: Maybe<Scalars['String']>;
  userid?: Maybe<Scalars['String']>;
};

export type UserprofileEdge = {
  __typename?: 'UserprofileEdge';
  cursor?: Maybe<Scalars['Int']>;
  node?: Maybe<Userprofile>;
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
  AddressEdge: ResolverTypeWrapper<AddressEdge>;
  AddressResponse: ResolverTypeWrapper<AddressResponse>;
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
  PaymentTrasnsactionResponse: ResolverTypeWrapper<PaymentTrasnsactionResponse>;
  Paymenttrasnsaction: ResolverTypeWrapper<Paymenttrasnsaction>;
  PaymenttrasnsactionEdge: ResolverTypeWrapper<PaymenttrasnsactionEdge>;
  Query: ResolverTypeWrapper<{}>;
  Request: ResolverTypeWrapper<Request>;
  Response: ResolverTypeWrapper<Response>;
  Role: Role;
  ShippingOrderResponse: ResolverTypeWrapper<ShippingOrderResponse>;
  Shippingorder: ResolverTypeWrapper<Shippingorder>;
  ShippingorderEdge: ResolverTypeWrapper<ShippingorderEdge>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserPageInfo: ResolverTypeWrapper<UserPageInfo>;
  UserProfileResponse: ResolverTypeWrapper<UserProfileResponse>;
  UserResponse: ResolverTypeWrapper<UserResponse>;
  Userprofile: ResolverTypeWrapper<Userprofile>;
  UserprofileEdge: ResolverTypeWrapper<UserprofileEdge>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  AddressEdge: AddressEdge;
  AddressResponse: AddressResponse;
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
  PaymentTrasnsactionResponse: PaymentTrasnsactionResponse;
  Paymenttrasnsaction: Paymenttrasnsaction;
  PaymenttrasnsactionEdge: PaymenttrasnsactionEdge;
  Query: {};
  Request: Request;
  Response: Response;
  ShippingOrderResponse: ShippingOrderResponse;
  Shippingorder: Shippingorder;
  ShippingorderEdge: ShippingorderEdge;
  String: Scalars['String'];
  User: User;
  UserEdge: UserEdge;
  UserPageInfo: UserPageInfo;
  UserProfileResponse: UserProfileResponse;
  UserResponse: UserResponse;
  Userprofile: Userprofile;
  UserprofileEdge: UserprofileEdge;
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
  addeddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  apartment_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdby?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  districtid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  floor_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  modifieddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  property_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  requestid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  streetname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sync_status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unique_mark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedby?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddressEdge'] = ResolversParentTypes['AddressEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddressResponse'] = ResolversParentTypes['AddressResponse']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['AddressEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
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
  addDummyRequestsData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationAddDummyRequestsDataArgs, never>>;
  addDummyUserData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationAddDummyUserDataArgs, never>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentTrasnsactionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentTrasnsactionResponse'] = ResolversParentTypes['PaymentTrasnsactionResponse']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PaymenttrasnsactionEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymenttrasnsactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Paymenttrasnsaction'] = ResolversParentTypes['Paymenttrasnsaction']> = {
  addeddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdby?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fawryfees?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  merchantrefnum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modifieddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  orderstatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  paymentamount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  paymentmethod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  referencenumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refundedamount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  requestid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  statuscode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statusdescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sync_status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transactiontype?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedby?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymenttrasnsactionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymenttrasnsactionEdge'] = ResolversParentTypes['PaymenttrasnsactionEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Paymenttrasnsaction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  addressesQuery?: Resolver<Maybe<ResolversTypes['AddressResponse']>, ParentType, ContextType, RequireFields<QueryAddressesQueryArgs, 'first'>>;
  newRequestsQuery?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<QueryNewRequestsQueryArgs, 'afterDate' | 'first' | 'id'>>;
  newUsersQuery?: Resolver<Maybe<ResolversTypes['UserResponse']>, ParentType, ContextType, RequireFields<QueryNewUsersQueryArgs, 'afterDate' | 'first'>>;
  paymenttrasnsactionsQuery?: Resolver<Maybe<ResolversTypes['PaymentTrasnsactionResponse']>, ParentType, ContextType, RequireFields<QueryPaymenttrasnsactionsQueryArgs, 'first'>>;
  requestsQuery?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<QueryRequestsQueryArgs, 'first'>>;
  shippingordersQuery?: Resolver<Maybe<ResolversTypes['ShippingOrderResponse']>, ParentType, ContextType, RequireFields<QueryShippingordersQueryArgs, 'first'>>;
  userprofilesQuery?: Resolver<Maybe<ResolversTypes['UserProfileResponse']>, ParentType, ContextType, RequireFields<QueryUserprofilesQueryArgs, 'first'>>;
  usersQuery?: Resolver<Maybe<ResolversTypes['UserResponse']>, ParentType, ContextType, RequireFields<QueryUsersQueryArgs, 'first'>>;
};

export type RequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['Request'] = ResolversParentTypes['Request']> = {
  AreaType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  HasPriceDifference?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  IsArchived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  IsPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  SyncStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  SyncStatusSa?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  UpdatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addeddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  area?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  areatype?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdby?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentstatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  modifieddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  requestnumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requeststatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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

export type ShippingOrderResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingOrderResponse'] = ResolversParentTypes['ShippingOrderResponse']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShippingorderEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingorderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shippingorder'] = ResolversParentTypes['Shippingorder']> = {
  addeddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  apartmentnumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdby?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  districtid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extracopiesprice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  floornumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifieddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  numberofcopies?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  officeid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orderstatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  propertynumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  regionid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  requestid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shippingcenter_adress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingprice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingtype?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shippingtype_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sync_status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uniquemark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedby?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingorderEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingorderEdge'] = ResolversParentTypes['ShippingorderEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Shippingorder']>, ParentType, ContextType>;
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

export type UserProfileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProfileResponse'] = ResolversParentTypes['UserProfileResponse']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserprofileEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserResponse'] = ResolversParentTypes['UserResponse']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['UserPageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserprofileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Userprofile'] = ResolversParentTypes['Userprofile']> = {
  addeddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdby?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  haswhatsapp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  modifieddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  phonenumbertype?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sync_status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  telephonenumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedby?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserprofileEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserprofileEdge'] = ResolversParentTypes['UserprofileEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Userprofile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  AddressEdge?: AddressEdgeResolvers<ContextType>;
  AddressResponse?: AddressResponseResolvers<ContextType>;
  AspNetUser?: AspNetUserResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Edge?: EdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PaymentTrasnsactionResponse?: PaymentTrasnsactionResponseResolvers<ContextType>;
  Paymenttrasnsaction?: PaymenttrasnsactionResolvers<ContextType>;
  PaymenttrasnsactionEdge?: PaymenttrasnsactionEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Request?: RequestResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
  ShippingOrderResponse?: ShippingOrderResponseResolvers<ContextType>;
  Shippingorder?: ShippingorderResolvers<ContextType>;
  ShippingorderEdge?: ShippingorderEdgeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserPageInfo?: UserPageInfoResolvers<ContextType>;
  UserProfileResponse?: UserProfileResponseResolvers<ContextType>;
  UserResponse?: UserResponseResolvers<ContextType>;
  Userprofile?: UserprofileResolvers<ContextType>;
  UserprofileEdge?: UserprofileEdgeResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  constraint?: ConstraintDirectiveResolver<any, any, ContextType>;
};
