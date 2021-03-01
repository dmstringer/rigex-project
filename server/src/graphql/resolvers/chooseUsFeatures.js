const { db } = require('../../db/models');

module.exports = {
  async items(parent) {
    const itemsArray = await db.ChooseUsItems.findAll({ where: { ChooseUsFeaturesId: parent.id } });
    return itemsArray;
  },
};
