const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    login(model: UserInput!): User!
    getAllAboutTextTypes: [AboutTextTypes]!
    getAllAboutText: [AboutText]!
    getAllRigs: [Rig]!
    getAllTeamMembers: [TeamMembers]!
    getAllServices: [Services]!
    getAllServiceFeatures: [ServiceFeatures]!
    getAllTests: [Tests]!
    getAllTestFeatures: [TestFeatures]!
    getAllStatistics: [Statistics]!
    getAllChooseUs: [ChooseUs]!
    getAllChooseUsFeatures: [ChooseUsFeatures]!
    getAllChooseUsItems: [ChooseUsItems]!
    getAllContentTypes: [ContentType]!
    getAllContentTexts: ContentTextWithType!
    getContentTextsByType(id: String!): ContentTextByType!
    getAllTeamResources: [TeamResource]!
    getAllInfrastructureTypes: [InfrastructureTypes]!
    getAllContentTextsByType: [ContentTextByType]!
    getAllDiskDrives: [DiskDrive]!
    getAllInfrastructureRequirements: [InfrastructureTypes]!
    getAllServerDrives: [ServerDrive]!
    getAllDeliveryPhases: GetAllDeliveryPhases!
  }

  type Mutation {
    createAccount(model: UserInput!): User!
    upsertAboutText(model: AboutTextInput!): AboutText!
    deleteAboutText(id: String!): String!
    upsertAboutTextTypes(model: AboutTextTypesInput!): AboutTextTypes!
    deleteAboutTextTypes(id: String!): Boolean!
    upsertTeamMembers(model: TeamMembersInput!): TeamMembers!
    deleteTeamMembers(id: String!): Boolean!
    upsertServices(model: ServicesInput!): Services!
    deleteServices(id: String!): String!
    upsertServiceFeatures(model: ServiceFeaturesInput!): ServiceFeatures!
    deleteServiceFeatures(id: String!): String!
    upsertTests(model: TestsInput!): Tests!
    deleteTests(id: String!): String!
    upsertTestFeatures(model: TestFeaturesInput!): TestFeatures!
    deleteTestFeatures(id: String!): String!
    upsertStatistics(model: StatisticsInput!): Statistics!
    deleteStatistics(id: String!): String!
    upsertChooseUs(model: ChooseUsInput!): ChooseUs!
    deleteChooseUs(id: String!): Boolean!
    upsertChooseUsFeatures(model: ChooseUsFeaturesInput!): ChooseUsFeatures!
    deleteChooseUsFeatures(id: String!): Boolean!
    upsertChooseUsItems(model: ChooseUsItemsInput!): ChooseUsItems!
    deleteChooseUsItems(id: String!): Boolean!
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
    upsertDiskDrive(model: DiskDriveInput!): DiskDrive!
    deleteDiskDrive(id: String!): Boolean!
    upsertInfrastructureRequirement(
      model: InfrastructureRequirementInput!
    ): InfrastructureRequirement!
    deleteInfrastructureRequirement(id: String!): Boolean!
    upsertServerDrive(model: ServerDriveInput!): ServerDrive!
    deleteServerDrive(id: String!): Boolean!
    upsertDeliveryPhase(model: DeliveryPhaseInput!): DeliveryPhase!
    deleteDeliveryPhase(id: String!): Boolean!
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

  type Statistics {
    id: String!
    mainText: String!
    subText: String!
  }

  input StatisticsInput {
    id: String
    mainText: String!
    subText: String!
  }

  type TeamMembers {
    id: String!
    firstName: String!
    lastName: String!
    position: String!
    itemInFront: String
  }

  input TeamMembersInput {
    id: String
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

  input ChooseUsInput {
    id: String
    title: String!
    description: String!
  }

  type ChooseUsFeatures {
    id: String!
    title: String!
    items: [ChooseUsItems]
  }

  input ChooseUsFeaturesInput {
    id: String
    title: String!
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

  input TestsInput {
    id: String
    title: String!
  }

  input TestFeaturesInput {
    id: String
    text: String!
    TestsId: String!
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
    id: String!
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
    titleColor: String
    backgroundColor: String
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
    titleColor: String
    backgroundColor: String
    content: [ContentText]
  }

  type ContentTextWithType {
    capabilities: [ContentText]!
    features: [ContentText]!
    benefits: [ContentText]!
    webServer: [ContentText]!
    integratedSystems: [ContentText]!
    preDeliveryPhase: [ContentText]!
    deliveryPhase: [ContentText]!
    databaseServer: [ContentText]!
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
    content: [InfrastructureRequirement]!
  }

  input InfrastructureTypesInput {
    id: String
    name: String
  }

  input DiskDriveInput {
    id: String
    title: String
  }

  type DiskDrive {
    id: String!
    title: String!
    createdAt: String!
    updatedAt: String!
  }

  type InfrastructureRequirement {
    id: String!
    title: String!
    hasDrives: [ServerDrive]!
    type: String!
    createdAt: String!
    updatedAt: String!
  }

  input InfrastructureRequirementInput {
    id: String
    title: String
    hasDrives: Boolean
    type: String
  }

  type FormattedInfrastructureRequirement {
    data: String
  }

  input ServerDriveInput {
    id: String
    infrastructureRequirementFk: String
    diskDriveFk: String
  }

  type ServerDrive {
    id: String!
    infrastructureRequirementFk: String!
    diskDriveFk: String!
    createdAt: String!
    updatedAt: String!
  }

  input DeliveryPhaseInput {
    id: String
    text: String!
    durationInHours: Float
    itemInFrontOf: String
    typeId: String!
    freezeDuration: Boolean
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

  type GetAllDeliveryPhases {
    data: GetAllDeliveryPhasesInner!
  }

  type GetAllDeliveryPhasesInner {
    preDeliveryPhase: [DeliveryPhase]!
    deliveryPhase: [DeliveryPhase]!
  }
`;

module.exports = typeDefs;
