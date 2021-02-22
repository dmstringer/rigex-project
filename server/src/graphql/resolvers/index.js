const queries = require('./queries');
const mutations = require('./mutations');
const rigResolver = require('./rig');
const contentResolver = require('./content');

module.exports = {
  Query: queries,
  Mutation: mutations,
  Rig: rigResolver,
  ContentTextByType: contentResolver,
};
