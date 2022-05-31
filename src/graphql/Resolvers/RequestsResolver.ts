import { PrismaClient } from "@prisma/client";
import { AuthenticationError, Context } from "apollo-server-core";
import bcrypt from "bcrypt";
import cookie from "cookie";
import { IncomingMessage, OutgoingMessage } from "http";
import { Request, Resolvers, User } from "../../generated/graphql";
import prisma from "../../prisma/prisma";
export interface Icontext extends Context {
  prisma: PrismaClient;
  user: User;
  res: OutgoingMessage;
  req: IncomingMessage;
  createToken: (user: User) => string;
}
export const RequestResolver: Resolvers<Icontext> = {
  Query: {
    requestsQuery: async (_, __, { prisma }) => {
      let queryResults = null;
      if (__.after) {
        //check for a a cursor
        queryResults = await prisma.requests.findMany({
          where: {
            IsPaid: { equals: true },
          },
          take: __.first,
          skip: 1,
          cursor: {
            Id: __.after,
          },
        });
      } else {
        queryResults = await prisma.requests.findMany({
          where: {
            IsPaid: { equals: true },
          },
          take: __.first,
        });
      }

      if (queryResults.length > 0) {
        const lastRequestResult = queryResults[queryResults.length - 1];
        const myCursor = lastRequestResult.Id;

        const secondQueryResults = await prisma.requests.findMany({
          where: {
            IsPaid: { equals: true },
          },
          take: __.first,
          cursor: {
            Id: myCursor,
          },
        });
        const result = {
          pageInfo: {
            endCursor: myCursor,
            hasNextPage:
              secondQueryResults.length >= __.first ||
              (secondQueryResults.length < __.first &&
                secondQueryResults.length > 0),
          },
          edges: queryResults.map((request) => ({
            cursor: request.Id,
            node: {
              id: request.Id,
              price: request.Price,
              unittype: request.UnitType,
              requeststatus: request.RequestStatus,
              addeddate: request.AddedDate,
              modifieddate: request.ModifiedDate,
              createdby: request.Createdby,
              updatedby: request.UpdatedBy,
              area: request.Area,
              requestnumber: request.RequestNumber,
              userid: request.UserId,
            },
          })),
        };
        return result;
      }
      return {
        pageInfor: {
          endCursor: null,
          hasNextPage: false,
        },
        edges: [],
      };
    },
    newRequestsQuery: async (_, __, { prisma }) => {
      let queryResults = null;
      if (__.after) {
        //check for a a cursor
        queryResults = await prisma.requests.findMany({
          where: {
            AddedDate: { gt: new Date(__.afterDate) },
            Id: { not: { equals: __.id } },
            IsPaid: { equals: true },
          },
          take: __.first,
          skip: 1,
          cursor: {
            Id: __.after,
          },
        });
      } else {
        queryResults = await prisma.requests.findMany({
          where: {
            AddedDate: { gt: new Date(__.afterDate) },
            Id: { not: { equals: __.id } },
            IsPaid: { equals: true },
          },
          take: __.first,
        });
      }
      if (queryResults.length > 0) {
        const lastRequestResult = queryResults[queryResults.length - 1];
        const myCursor = lastRequestResult.Id;
        const secondQueryResults = await prisma.requests.findMany({
          where: { AddedDate: { gt: new Date(__.afterDate) } },
          take: __.first,
          cursor: {
            Id: myCursor,
          },
        });
        const result = {
          pageInfo: {
            endCursor: myCursor,
            hasNextPage:
              secondQueryResults.length >= __.first ||
              (secondQueryResults.length < __.first &&
                secondQueryResults.length > 1),
          },
          edges: queryResults.map((request) => ({
            cursor: request.Id,
            node: {
              id: request.Id,
              price: request.Price,
              unittype: request.UnitType,
              requeststatus: request.RequestStatus,
              addeddate: request.AddedDate,
              modifieddate: request.ModifiedDate,
              createdby: request.Createdby,
              updatedby: request.UpdatedBy,
              area: request.Area,
              requestnumber: request.RequestNumber,
              userid: request.UserId,
              UpdatedBy: String,
            },
          })),
        };
        return result;
      }
      return {
        pageInfor: {
          endCursor: null,
          hasNextPage: false,
        },
        edges: [],
      };
    },
  },
  // for testing
  Mutation: {
    addDummyRequestsData: async (_, { inputs }, { prisma }) => {
      try {
        await prisma.requests.createMany({ data: [...inputs] });
        return "ok";
      } catch (error) {
        console.log(error);
        return "no";
      }
    },
  },
};
