const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    login(model: UserInput!): User!
    getAllAboutText: [AboutText]!
    getAllRigs: [Rig]!
  }

  type Mutation {
    createAccount(model: UserInput!): User!
    upsertAboutText(model: AboutTextInput!): AboutText!
    deleteAboutText(id: String!): String!
    upsertWell(model: WellInput): Well!
    deleteWell(id: String!): Boolean!
    deleteWells(rigId: String!): Boolean!
    upsertRig(model: RigInput!): Rig!
    deleteRig(id: String!): Boolean!
  }

  type AboutText {
    id: String!
    type: String!
    text: String!
    createdAt: String!
    updatedAt: String!
  }

  input AboutTextInput {
    id: String
    type: String!
    text: String!
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
    createdAt: String!
    updatedAt: String!
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
    name: String
    longitude: Float
    latitude: Float
    rigId: String
  }
`;

module.exports = typeDefs;
