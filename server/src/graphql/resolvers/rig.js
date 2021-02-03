const { db } = require('../../db/models');

module.exports = {
  async wells(parent) {
    const wellsArray = await db.Well.findAll({ where: { rigId: parent.id } });
    return wellsArray;
  },
};
