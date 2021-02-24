const { db } = require('../../db/models');

module.exports = {
  async features(parent) {
    return await db.ServiceFeatures.findAll({ where: { ServiceId: parent.id } });;
  },
};
