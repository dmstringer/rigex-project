import { gql } from '@apollo/client';

export const typeDefs = gql`
  extend type Query {
    login(model: UserInput!): User!
    getAllAboutText: [AboutText]
    getAllServices: [Services]
    getAllRigs: [Rigs]
    getAllTeamMembers:  [TeamMembers]!
    getAllChooseUs: [ChooseUs]!
    getAllChooseUsFeatures: [ChooseUsFeatures]!
    getContentTextsByType(id: String!): ContentTextByType!
    getAllContentTextsByType: ContentTextByType!
    getAllTeamResources: [TeamResource]!
  }

  type Services {
    id: String!
    title: String!
    itemInFront: String
    description: String!
    features: [ServiceFeatures]!
  }

  input ServicesInput {
    id: String!
    itemInFront: String
    title: String
    description: String
    features: [ServiceFeaturesInput]
  }

  type ServiceFeatures {
    id: String!
    ServiceId: String!
    itemInFront: String
    text: String!
  }

  input ServiceFeaturesInput {
    id: String
    ServiceId: String!
    itemInFront: String
    text: String!
  }

  type TeamMembers {
    id: String!
    firstName: String!
    lastName: String!
    position: String!
    itemInFront: String!
  }

  input TeamMembers {
    id: String!
    firstName: String!
    lastName: String!
    position: String!
    itemInFront: String
  }

  type ChooseUs {
    id: String!
    title: String!
    description: String!
  }

  type ChooseUsFeatures {
    id: String!
    title: String!
    items: [ChooseUsItems]
  }

  type ChooseUsItems {
    id: String!
    ChooseUsFeaturesId: String!
    text: String!
    itemInFront: String
    feature: ChooseUsFeatures
  }

  input ChooseUsItemsInput {
    id: String
    ChooseUsFeaturesId: String!
    text: String!
    itemInFront: String
  }

  type Statistics {
    id: String!
    mainText: String!
    subText: String!
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
    status: String!
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
    upsertService(model: ServiceInput!): Services!
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
    status: String
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

  type TeamResource {
    id: String!
    teamRole: String!
    commitment: String!
  }
`;
