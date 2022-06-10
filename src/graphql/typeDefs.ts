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

  type Edge {
    cursor: Int
    node: Request
  }
  type UserEdge {
    cursor: String
    node: AspNetUser
  }
  type UserprofileEdge {
    cursor: Int
    node: Userprofile
  }
  type PaymenttrasnsactionEdge {
    cursor: Int
    node: Paymenttrasnsaction
  }
  type ShippingorderEdge {
    cursor: Int
    node: Shippingorder
  }
  type AddressEdge {
    cursor: Int
    node: Address
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

  type AddressResponse {
    pageInfo: PageInfo
    edges: [AddressEdge]
  }
  type PaymentTrasnsactionResponse {
    pageInfo: PageInfo
    edges: [PaymenttrasnsactionEdge]
  }
  type UserProfileResponse {
    pageInfo: PageInfo
    edges: [UserprofileEdge]
  }
  type ShippingOrderResponse {
    pageInfo: PageInfo
    edges: [ShippingorderEdge]
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
    areatype: Int
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
  type Address {
    id: Int!
    description: String
    districtid: Int
    property_number: String
    floor_number: Int
    apartment_number: Int
    streetname: String
    unique_mark: String
    requestid: Int
    addeddate: Date
    modifieddate: Date
    createdby: String
    updatedby: String
    regionid: Int
    sync_status: Int
  }
  type Userprofile {
    id: Int
    telephonenumber: String
    userid: String
    addeddate: Date
    modifieddate: Date
    createdby: String
    updatedby: String
    haswhatsapp: Boolean
    phonenumbertype: Int
    description: String
    sync_status: Int
  }
  type Shippingorder {
    id: Int
    requestid: Int
    shippingtype: Int
    shippingprice: Float
    officeid: Int
    longitude: Float
    latitude: Float
    districtid: Int
    addeddate: Date
    modifieddate: Date
    createdby: String
    updatedby: String
    numberofcopies: Int
    apartmentnumber: Int
    description: String
    floornumber: Int
    propertynumber: Int
    regionid: Int
    streetname: String
    uniquemark: String
    extracopiesprice: Float
    orderstatus: Int
    sync_status: Int
  }
  type Paymenttrasnsaction {
    id: Int
    merchantrefnum: String
    price: Float
    paymentamount: Float
    fawryfees: Float
    paymentmethod: Int
    orderstatus: Int
    referencenumber: String
    statuscode: String
    statusdescription: String
    requestid: Int
    addeddate: Date
    modifieddate: Date
    createdby: String
    updatedby: String
    transactiontype: Int
    refundedamount: Float
    sync_status: Int
    userid: String
  }

  type Query {
    rualive: Boolean!
    requestsQuery(first: Int!, after: Int): Response
    usersQuery(first: Int!, after: String): UserResponse
    addressesQuery(first: Int!, after: Int): AddressResponse
    userprofilesQuery(first: Int!, after: Int): UserProfileResponse
    shippingordersQuery(first: Int!, after: Int): ShippingOrderResponse
    paymenttrasnsactionsQuery(
      first: Int!
      after: Int
    ): PaymentTrasnsactionResponse
  }
`;
