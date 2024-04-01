import gql from "graphql-tag";

export const postTypeDefs = gql`
  scalar Date

  type Post {
    id: ID!
    image: String!
    title: String!
    description: String!
    createdAt: Date
    updatedAt: Date
  }

  input PostRegisterInput {
    image: String!
    title: String!
    description: String!
  }

  type Query {
    getPosts: [Post]!
    getPost(id: ID!): Post
  }

  type Mutation {
    registerPost(input: PostRegisterInput!): Post!
  }
`;
