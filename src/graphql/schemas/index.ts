import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { userTypeDefs } from "./user-schema";
import { adminTypeDefs } from "./admin-schema";

export const typeDefs = mergeTypeDefs([userTypeDefs, adminTypeDefs]);
