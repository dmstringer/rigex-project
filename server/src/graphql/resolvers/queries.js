const bcrypt = require('bcryptjs');
const { db } = require('../../db/models');
const { isValidEmail } = require('../../utils');

module.exports = {
  login: async (_, { model: { email, password } }) => {
    const isValid = isValidEmail(email);
    const invalidUser = {
      isValid: false,
    };
    if (!isValid) {
      return invalidUser;
    }
    const user = await db.User.findOne({
      where: { email },
    });
    if (!user) {
      return invalidUser;
    }
    const isValidated = bcrypt.compareSync(password, user.password);

    if (isValidated) {
      return {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        isValid: true,
      };
    } else {
      return invalidUser;
    }
  },
};
