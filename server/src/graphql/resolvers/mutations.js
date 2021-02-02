const bcrypt = require('bcryptjs');
const uuidv4 = require('uuid').v4;

const { isValidEmail, isUniqueEmail } = require('../../utils');
const { db } = require('../../db/models');
const { invalidEmail, nonUniqueEmail } = require('../../constants/errors');

module.exports = {
  createAccount: async (_, { model: { email, password } }) => {
    const isValid = isValidEmail(email);
    const isUnique = await isUniqueEmail(email);
    if (!isValid) {
      return new Error(invalidEmail);
    }
    if (!isUnique) {
      return new Error(nonUniqueEmail);
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = await db.User.create({ id: uuidv4(), email, password: hash });
    return user ? true : false;
  },

  deleteRig: async (_, { id }) => {
    try {
      const isDeleted = await db.Rig.destroy({ where: { id } });
      return isDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },

  upsertRig: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.Rig.upsert({ ...model });
      return db.Rig.findByPk(model.id);
    } catch (error) {
      return error;
    }
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
    } catch (error) {
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

  deleteRig: async (_, { id }) => {
    const isDeleted = await Rig.destroy({ where: { id } });
    return isDeleted ? true : false;
  },

  upsertRig: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    const rig = await Rig.upsert({ ...model });
    return rig;
  },
};
