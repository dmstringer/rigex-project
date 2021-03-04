const queries = require('./queries');
const mutations = require('./mutations');
const rigResolver = require('./rig');
const chooseUsFeaturesResolver = require('./chooseUsFeatures');
const chooseUsItemsResolver = require('./chooseUsItems');
const servicesResolver = require('./services');
const testsResolver = require('./tests')
const contentTextByTypeResolver = require('./contentTextByType');
const contentTextWithTypeResolver = require('./contentTextWithType');
const aboutTextTypesResolver = require('./aboutTextTypes');
const infrastructureResolver = require('./infrastructure');
const infrastructureRequirementResolver = require('./infrastructureRequirement');
const deliveryPhaseResolver = require('./deliveryPhase');

module.exports = {
  Query: queries,
  Mutation: mutations,
  AboutText: aboutTextTypesResolver,
  Rig: rigResolver,
  ContentTextByType: contentTextByTypeResolver,
  ContentTextWithType: contentTextWithTypeResolver,
  Tests: testsResolver,
  Services: servicesResolver,
  ChooseUsFeatures: chooseUsFeaturesResolver,
  ChooseUsItems: chooseUsItemsResolver,
  InfrastructureTypes: infrastructureResolver,
  InfrastructureRequirement: infrastructureRequirementResolver,
  GetAllDeliveryPhases: deliveryPhaseResolver,
};
