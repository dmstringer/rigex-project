const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    login(model: UserInput!): User!
    getAllAboutTextTypes: [AboutTextTypes]!
    getAllAboutText: [AboutText]!
    getAllRigs: [Rig]!
    getAllServices: [Services]!
    getAllServiceFeatures: [ServiceFeatures]!
    getAllContentTypes: [ContentType]!
    getAllContentTexts: [ContentText]!
    getContentTextsByType(id: String!): ContentTextByType!
    getAllTeamResources: [TeamResource]!
    getAllInfrastructureTypes: [InfrastructureTypes]!
    getAllContentTextsByType: [ContentTextByType]!
  }

  type Mutation {
    createAccount(model: UserInput!): User!
    upsertAboutText(model: AboutTextInput!): AboutText!
    deleteAboutText(id: String!): String!
    upsertAboutTextTypes(model: AboutTextTypesInput!): AboutTextTypes!
    deleteAboutTextTypes(id: String!): Boolean!
    upsertServices(model: ServicesInput!): Services!
    deleteServices(id: String!): String!
    upsertServiceFeatures(model: ServiceFeatureInput!): ServiceFeatures!
    deleteServiceFeatures(id: String!): String!
    upsertWell(model: WellInput): Well!
    upsertContentType(model: ContentTypeInput!): ContentType!
    upsertContentText(model: ContentTextInput!): ContentText!
    deleteContentType(id: String!): Boolean!
    deleteContentText(id: String!): Boolean!
    deleteWell(id: String!): Boolean!
    deleteWells(rigId: String!): Boolean!
    upsertRig(model: RigInput!): Rig!
    deleteRig(id: String!): Boolean!
    upsertTeamResource(model: TeamResourceInput!): TeamResource!
    deleteTeamResource(id: String!): Boolean!
    upsertInfrastructureType(
      model: InfrastructureTypesInput!
    ): InfrastructureTypes!
    deleteInfrastructureType(id: String!): Boolean!
  }

  type AboutTextTypes {
    id: String!
    type: String!
    createdAt: String!
    updatedAt: String!
  }

  input AboutTextTypesInput {
    id: String
    type: String!
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
    AboutTextTypeId: String!
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

  type Services {
    id: String!
    title: String!
    itemInFront: String
    description: String!
    features: [ServiceFeatures]!
    createdAt: String!
    updatedAt: String!
  }

  input ServicesInput {
    id: String
    title: String!
    itemInFront: String
    description: String!
    features: [ServiceFeatureInput]!
  }

  type ServiceFeatures {
    id: String!
    ServiceId: String!
    itemInFront: String
    text: String!
    createdAt: String!
    updatedAt: String!
  }

  input ServiceFeatureInput {
    id: String
    ServiceId: String!
    itemInFront: String
    text: String!
  }

  type Well {
    id: String!
    name: String!
    longitude: Float!
    latitude: Float!
    rigId: String!
    status: String!
    createdAt: String!
    updatedAt: String!
  }

  input WellInput {
    id: String
    name: String
    longitude: Float
    latitude: Float
    rigId: String
    status: String
  }

  type ContentType {
    id: String!
    name: String!
    section: String!
    titleColor: String!
    backgroundColor: String!
    createdAt: String!
    updatedAt: String!
  }

  input ContentTypeInput {
    id: String
    name: String
    section: String
    titleColor: String
    backgroundColor: String
  }

  type ContentText {
    id: String!
    text: String!
    type: String!
    createdAt: String!
    updatedAt: String!
  }

  type ContentTextByType {
    id: String!
    name: String!
    section: String!
    titleColor: String!
    backgroundColor: String!
    content: [ContentText]
  }

  input ContentTextInput {
    id: String
    text: String
    type: String
  }

  type TeamResource {
    id: String!
    teamRole: String!
    commitment: String!
  }

  input TeamResourceInput {
    id: String
    teamRole: String
    commitment: String
  }

  type InfrastructureTypes {
    id: String!
    name: String!
  }

  input InfrastructureTypesInput {
    id: String
    name: String
  }
`;

module.exports = typeDefs;
