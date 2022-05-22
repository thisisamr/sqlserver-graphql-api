import { gql } from "apollo-server-express";
import { GraphQLScalarType, Kind } from "graphql";
const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value: any) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value: any) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast: any) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

export const typeDefs = gql`
  enum Role {
    ADMIN
    MEMBER
    GUEST
  }
  scalar Date
  type User {
    email: String!
    password: String!
  }
  # type Request {
  #   Id: Int!
  #   UnitType: Int
  #   RequestStatus: Int
  #   Area: Float
  #   Price: Float
  #   RequestNumber: String
  #   UserId: String
  #   user: AspNetUser
  # }
  type Edge {
    cursor: Int
    node: Request
  }
  type UserEdge {
    cursor: String
    node: AspNetUser
  }

  type PageInfo {
    endCursor: Int
    hasNextPage: Boolean
  }
  type UserPageInfo {
    endCursor: String
    hasNextPage: Boolean
  }
  type Response {
    pageInfo: PageInfo
    edges: [Edge]
  }
  type UserResponse {
    pageInfo: UserPageInfo
    edges: [UserEdge]
  }

  type Request {
    unittype: Int!
    requeststatus: Int
    area: Float
    price: Float
    requestnumber: String
    userid: String
    user: AspNetUser
    addeddate: Date
    modifieddate: Date
    createdby: String
    updatedby: String
    currentstatus: Int
    UpdatedBy: String
    AreaType: Int
    SyncStatus: Int
    HasPriceDifference: Boolean
    IsPaid: Boolean
    IsArchived: Boolean
    SyncStatusSa: Int
    id: Int!
  }

  type AspNetUser {
    id: String!
    arabicfullname: String
    addeddate: Date
    modifieddate: Date
    makerid: String
    dateofbirth: Date
    firstlogin: Boolean
    addressid: Int
    username: String
    normalizedusername: String
    email: String
    normalizedemail: String
    emailconfirmed: Boolean
    passwordhash: String
    securitystamp: String
    concurrencystamp: String
    phonenumber: String
    phonenumberconfirmed: Boolean
    twofactorenabled: Boolean
    lockoutendl: Date
    lockoutenabled: Boolean
    accessfailedcount: Int
    sync_status: Int
  }
  input DummyReq {
    Id: ID
    HasPriceDifference: Boolean
    IsPaid: Boolean
    IsArchived: Boolean
    UnitType: Int!
    RequestStatus: Int
    Area: Float
    Price: Float
    RequestNumber: String
    UserId: String
    AddedDate: Date
    ModifiedDate: Date
    Createdby: String
    UpdatedBy: String
    CurrentStatus: Int
    areatype: Int
    syncstatus: Int
    haspricedifference: Boolean
    ispaid: Boolean
    isArchived: Boolean
  }
  input Dummy {
    Id: String!
    ArabicFullName: String
    AddedDate: Date
    ModifiedDate: Date
    MakerId: String
    DateOfBirth: Date
    FirstLogIn: Boolean
    AddressId: Int
    UserName: String
    NormalizedUserName: String
    Email: String
    NormalizedEmail: String
    EmailConfirmed: Boolean
    PasswordHash: String
    SecurityStamp: String
    ConcurrencyStamp: String
    PhoneNumber: String
    PhoneNumberConfirmed: Boolean
    TwoFactorEnabled: Boolean
    LockoutEnd: Date
    LockoutEnabled: Boolean
    AccessFailedCount: Int
    SyncStatus: Int
  }
  type Address {
    Id: ID
    Description: String
    DistrictId: Int
    UserProfileId: Int
  }

  type Query {
    requestsQuery(first: Int!, after: Int): Response
    usersQuery(first: Int!, after: String): UserResponse
    newUsersQuery(first: Int!, after: String, afterDate: Date!): UserResponse
    newRequestsQuery(
      first: Int!
      after: Int
      afterDate: Date!
      id: Int!
    ): Response
  }
  type Mutation {
    addDummyUserData(inputs: [Dummy]): String
    addDummyRequestsData(inputs: [DummyReq]): String
  }
`;
