const { Well } = require("../../db/models");
const uuidv4 = require("uuid").v4;

module.exports = {
  upsertWell: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    await Well.upsert({ ...model });
    return Well.findByPk(model.id);
  },

  deleteWell: async (_, { id }) => {
    const deletedWell = await Well.findOne({ where: { id } });
    await Well.destroy({ where: { id } });
    return deletedWell;
  },

  deleteWells: async (_, { wellIds }) => {
    const deletedWells = wellIds.map(
      async (wellId) => await Well.findOne({ where: { id: wellId } })
    );
    wellIds.forEach(async (wellId) => {
      await Well.destroy({ where: { id: wellId } });
    });
    return deletedWells;
  },
};
