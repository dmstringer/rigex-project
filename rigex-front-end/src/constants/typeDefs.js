import { gql } from '@apollo/client';

export const typeDefs = gql`
  extend type Query {
    login(model: UserInput!): ValidUser!
    createAccount(model: UserInput!): Boolean!
  }

  input UserInput {
    email: String!
    password: String!
  }
`;
