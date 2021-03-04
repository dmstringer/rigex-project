import { gql } from '@apollo/client';

export const typeDefs = gql`
  extend type Query {
    login(model: UserInput!): User!
    getAllAboutText: [AboutText]
    getAllServices: [Services]
    getAllRigs: [Rigs]
    getAllTeamMembers: [TeamMembers]!
    getAllTests: [Tests]!
    getAllChooseUs: [ChooseUs]!
    getAllChooseUsFeatures: [ChooseUsFeatures]!
    getContentTextsByType(id: String!): ContentTextByType!
    getAllContentTextsByType: ContentTextByType!
    getAllTeamResources: [TeamResource]!
    getAllInfrastructureRequirements: [InfrastructureTypes]!
    getAllDiskDrives: [DiskDrive]!
    getAllDeliveryPhases: GetAllDeliveryPhases!
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

  type Tests {
    id: String!
    title: String!
    items: [TestFeatures]!
  }

  type TestFeatures {
    id: String!
    text: String!
    TestsId: String!
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

  type InfrastructureTypes {
    id: String!
    name: String!
    content: [InfrastructureRequirement]!
  }

  type InfrastructureRequirement {
    id: String!
    title: String!
    hasDrives: [ServerDrive]!
    type: String!
    createdAt: String!
    updatedAt: String!
  }

  type ServerDrive {
    id: String!
    infrastructureRequirementFk: String!
    diskDriveFk: String!
    createdAt: String!
    updatedAt: String!
  }

  type DiskDrive {
    id: String!
    title: String!
    createdAt: String!
    updatedAt: String!
  }

  type GetAllDeliveryPhases {
    data: GetAllDeliveryPhasesInner!
  }

  type GetAllDeliveryPhasesInner {
    preDeliveryPhase: [DeliveryPhase]!
    deliveryPhase: [DeliveryPhase]!
  }

  type DeliveryPhase {
    id: String!
    text: String!
    durationInHours: Float
    itemInFrontOf: String
    typeId: String!
    freezeDuration: Boolean
    createdAt: String!
    updatedAt: String!
  }
`;
