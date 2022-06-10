import { PrismaClient } from "@prisma/client";
import { Context } from "apollo-server-core";
import { IncomingMessage, OutgoingMessage } from "http";
import { Resolvers, User } from "../../generated/graphql";
export interface Icontext extends Context {
  prisma: PrismaClient;
  user: User;
  res: OutgoingMessage;
  req: IncomingMessage;
  createToken: (user: User) => string;
}
export const PaymentTrasnsactionsResolver: Resolvers<Icontext> = {
  Query: {
    paymenttrasnsactionsQuery: async (_, { after, first }, { prisma }) => {
      let queryResults = null;
      if (after) {
        //check for a a cursor
        queryResults = await prisma.paymentTrasnsactions.findMany({
          take: first,
          skip: 1,
          cursor: {
            Id: after,
          },
        });
      } else {
        queryResults = await prisma.paymentTrasnsactions.findMany({
          take: first,
        });
      }
      if (queryResults.length > 0) {
        const lastpaymentTrasnsactionsResult =
          queryResults[queryResults.length - 1];
        const myCursor = lastpaymentTrasnsactionsResult.Id;

        const secondQueryResults = await prisma.paymentTrasnsactions.findMany({
          take: first,
          cursor: {
            Id: myCursor,
          },
        });
        const result = {
          pageInfo: {
            endCursor: myCursor,
            hasNextPage:
              secondQueryResults.length >= first ||
              (secondQueryResults.length < first &&
                secondQueryResults.length > 1),
          },
          edges: queryResults.map((paymentTrasnsaction) => ({
            cursor: paymentTrasnsaction.Id,
            node: {
              id: paymentTrasnsaction.Id,
              merchantrefnum: paymentTrasnsaction.MerchantRefNum,
              price: paymentTrasnsaction.Price,
              paymentamount: paymentTrasnsaction.PaymentAmount,
              fawryfees: paymentTrasnsaction.FawryFees,
              paymentmethod: paymentTrasnsaction.PaymentMethod,
              orderstatus: paymentTrasnsaction.OrderStatus,
              referencenumber: paymentTrasnsaction.ReferenceNumber,
              statuscode: paymentTrasnsaction.StatusCode,
              statusdescription: paymentTrasnsaction.StatusDescription,
              requestid: paymentTrasnsaction.RequestId,
              addeddate: paymentTrasnsaction.AddedDate,
              modifieddate: paymentTrasnsaction.ModifiedDate,
              createdby: paymentTrasnsaction.Createdby,
              updatedby: paymentTrasnsaction.UpdatedBy,
              transactiontype: paymentTrasnsaction.TransactionType,
              refundedamount: paymentTrasnsaction.RefundedAmount,
              sync_status: paymentTrasnsaction.SyncStatus,
              userid: paymentTrasnsaction.UserId,
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
};
