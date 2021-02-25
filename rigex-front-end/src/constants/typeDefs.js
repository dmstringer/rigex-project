import { gql } from '@apollo/client';

export const typeDefs = gql`
  extend type Query {
    login(model: UserInput!): User!
    getAllAboutText: [AboutText]
    getAllRigs: [Rigs]
  }

  type Rig {
    id: String!
    name: String!
    createdAt: String!
    updatedAt: String!
    wells: [Well]
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

  type AboutText {
    id: String!
    type: String!
    text: String!
  }

  extend type Mutation {
    upsertRig(model: RigInput!): Rig!
    createAccount(model: UserInput!): User!
    upsertWell(model: WellInput!): Well!
    deleteWell(id: String!): Boolean!
  }

  input UserInput {
    email: String!
    password: String!
  }

  input RigInput {
    name: String!
    id: String
  }

  input WellInput {
    id: String
    name: String
    longitude: Float
    latitude: Float
    rigId: String
  }
`;
