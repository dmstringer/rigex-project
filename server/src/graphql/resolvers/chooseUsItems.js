const { db } = require('../../db/models');

module.exports = {
  async feature(parent) {
    const feature = await db.ChooseUsFeatures.findOne({ where: { id: parent.ChooseUsFeaturesId } });
    return feature;
  },
};
