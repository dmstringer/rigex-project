const { User } = require("../../db/models");
const { Well } = require("../../db/models");
const bcrypt = require("bcryptjs");
const isValidEmail = require("../../utils/isValidEmail");
const uuidv4 = require("uuid").v4;

module.exports = {
  createAccount: async (_, { model: { email, password } }) => {
    const isValid = isValidEmail(email);
    if (!isValid) {
      return false;
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = await User.create({ id: uuidv4(), email, password: hash });
    return user ? true : false;
  },

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
