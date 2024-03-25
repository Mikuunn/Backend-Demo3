import gql from "graphql-tag";

export const adminTypeDefs = gql`
  type Admin {
    id: ID!
    email: String!
    password: String
    image: String
    cvv: String
  }

  input AdminRegisterInput {
    email: String!
    password: String!
    cvv: String
  }

  type Query {
    getAdmins: [Admin]!
    getAdmin(id: ID!): Admin
  }

  type Mutation {
    registerAdmin(input: AdminRegisterInput!): Admin!
  }
`;
