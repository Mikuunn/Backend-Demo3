import { userQueries } from "./queries/user-queries";
import { AdminQueries } from "./queries/admin-queries";
import { AdminMutations } from "./mutations/admin-mutations";
import { userMutations } from "./mutations/user-mutations";
import { PostMutations } from "./mutations/post-mutations";

export const resolvers = {
  Query: {
    ...userQueries,
    ...AdminQueries,
  },
  Mutation: {
    ...userMutations,
    ...AdminMutations,
    ...PostMutations,
  },
};
