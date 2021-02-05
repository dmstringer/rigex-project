const bcrypt = require('bcryptjs');

const { db } = require('../../db/models');
const { isValidEmail } = require('../../utils');
const errorMessages = require('../../constants/errors');

module.exports = {
  login: async (_, { model: { email, password } }) => {
    const emailIsValid = isValidEmail(email);
    if (!emailIsValid) return new Error(errorMessages.invalidEmail);

    const user = await db.User.findOne({
      where: { email },
    });
    if (!user) return new Error(errorMessages.noMatchingEmail);

    const isValidated = bcrypt.compareSync(password, user.password);

    if (isValidated) {
      return {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    } else return new Error(errorMessages.incorrectPassword);
  },
};
