const queries = require("./queries");
const mutations = require("./mutations");
const rigResolver = require("./rig");

module.exports = {
  Query: queries,
  Mutation: mutations,
  Rig: rigResolver,
};
