'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS pgcrypto; CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
    );
  },

  down: (queryInterface) => {
    return queryInterface.sequelize.query(
      'DROP EXTENSION IF EXISTS pgcrypto; DROP EXTENSION IF EXISTS "uuid-ossp"'
    );
  },
};
