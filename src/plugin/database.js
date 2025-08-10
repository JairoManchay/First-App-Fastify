// plugin/database.js
const fastifyPlugin = require('fastify-plugin');
const pgp = require('pg-promise')();
const {applyMigration} = require('./helper/migrations');
const config = require('../config');

const db = async (fast, options) => {
  const dbConfig = pgp(config.database_uri);

  // register db as decorator
  fast.decorate('db', dbConfig);

  fast.log.info('Database plugin has been registered');

  const migrationCount = await applyMigration();

  fast.log.info(`${migrationCount} migrations applied`);

};

module.exports = fastifyPlugin(db);
