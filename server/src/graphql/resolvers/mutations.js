const { db } = require('../../db/models');
const bcrypt = require('bcryptjs');
const isValidEmail = require('../../utils/isValidEmail');
const uuidv4 = require('uuid').v4;

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
};
