const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    login(model: UserInput!): ValidUser!
    getAllRigs: [Rig]!
  }

  type Mutation {
    createAccount(model: UserInput!): Boolean!
    upsertWell(model: WellInput!): Well!
    deleteWell(id: String!): Boolean!
    deleteWells(wellIds: [String]!): Boolean!
    upsertRig(model: RigInput!): Rig!
    deleteRig(id: String!): Boolean!
  }

  type Rig {
    id: String!
    name: String!
    createdAt: String!
    updatedAt: String!
    wells: [Well]
  }

  input RigInput {
    id: String
    name: String!
  }

  type User {
    id: String!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!
  }

  type ValidUser {
    id: String
    email: String
    createdAt: String
    updatedAt: String
    isValid: Boolean!
  }

  input UserInput {
    email: String!
    password: String!
  }

  type Well {
    id: String!
    name: String!
    longitude: Float!
    latitude: Float!
    rigId: String!
    createdAt: String!
    updatedAt: String!
  }

  input WellInput {
    id: String
    name: String!
    longitude: Float!
    latitude: Float!
    rigId: String!
  }
`;

module.exports = typeDefs;
