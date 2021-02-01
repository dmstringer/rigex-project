const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    login(model: UserInput!): ValidUser!
    isUniqueEmail(email: String!): Boolean!
  }

  type Mutation {
    createAccount(model: UserInput!): Boolean!
  }

  type User {
    id: ID!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!
  }

  type ValidUser {
    id: ID
    email: String
    createdAt: String
    updatedAt: String
    isValid: Boolean!
  }

  input UserInput {
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;
