const bcrypt = require('bcryptjs');
const uuidv4 = require('uuid').v4;

const { db } = require('../../db/models');
const isValidEmail = require('../../utils/isValidEmail');

module.exports = {
  createAccount: async (_, { model: { email, password } }) => {
    const isValid = isValidEmail(email);
    if (!isValid) {
      return false;
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = await db.User.create({ id: uuidv4(), email, password: hash });
    return user ? true : false;
  },

  upsertWell: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.Well.upsert({ ...model });
      return db.Well.findByPk(model.id);
    } catch (error) {
      return error;
    }
  },

  deleteWell: async (_, { id }) => {
    try {
      await db.Well.destroy({ where: { id } });
      return true;
    }
    catch (error) {
      return error;
    }
  },

  deleteWells: async (_, { wellIds }) => {
    try {
      wellIds.forEach(async (wellId) => {
        await db.Well.destroy({ where: { id: wellId } });
      });
      return true;
    } catch (error) {
      return error;
    }
  },
};

