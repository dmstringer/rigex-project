const { db } = require('../../db/models');

module.exports = {
  async hasDrives(parent) {
    const contentArray = await db.serverDrive.findAll({
      where: { infrastructureRequirementFk: parent.id },
    });
    return contentArray;
  },
};
