const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    upsertWell(model: WellInput!): Well!
    deleteWell(id: ID!): Well!
    deleteWells(wellIds: [ID]!): [Well]!
  }

  type Well {
    id: ID!
    name: String!
    longitude: Float!
    latitude: Float!
    rigId: String!
    createdAt: String!
    updatedAt: String!
  }

  input WellInput {
    name: String!
    longitude: Float!
    latitude: Float!
    rigId: String!
  }
`;

module.exports = typeDefs;
