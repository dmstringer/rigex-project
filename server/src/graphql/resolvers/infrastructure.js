const { db } = require('../../db/models');

module.exports = {
  async content(parent) {
    const contentArray = await db.infrastructureRequirements.findAll({
      where: { type: parent.id },
    });
    return contentArray;
  },
};
