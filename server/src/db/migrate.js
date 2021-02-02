const execSync = require('child_process').execSync;

const runSequelizeCommand = async (command) => {
  try {
    execSync(__dirname + '/../../node_modules/.bin/sequelize ' + command, {
      stdio: 'inherit',
    });
  } catch (e) {}
};

const initDB = async () => {
  await runSequelizeCommand('db:create');
  await runSequelizeCommand('db:migrate');
  await runSequelizeCommand('db:seed:undo:all');
  await runSequelizeCommand('db:seed:all');
};

module.exports = initDB;
