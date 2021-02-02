const { db } = require('../db/models');

module.exports = async (email) => {
  const existingUser = await db.User.findOne({ where: { email } });

  return !existingUser ? true : false;
};
