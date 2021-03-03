const { db } = require('../../db/models');

module.exports = {
  async items(parent) {
    return await db.TestFeatures.findAll({ where: { TestsId: parent.id } });
  },
};
