import { gql } from '@apollo/client';

export const typeDefs = gql`
  extend type Query {
    login(model: UserInput!): ValidUser!
  }

  type Mutation {
    createAccount(model: UserInput!): User!
  }

  input UserInput {
    email: String!
    password: String!
  }
`;
