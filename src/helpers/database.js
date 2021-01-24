const { Sequelize } = require('sequelize');

require('dotenv').config();

const DATABASE = process.env.TESTING === 'true' ? 'postgres' : process.env.DB_NAME;

const HOST = process.env.DB_HOST || 'localhost';
const PORT = process.env.DB_PORT || 5432;
const PASS = process.env.DB_PW;
const USER = process.env.DB_USER;
const LOGGING = process.env.LOGGING === 'false'?false:true;

const sequelize = new Sequelize(
  `postgres://${USER}:${PASS}@${HOST}:${PORT}/${DATABASE}`,
  {logging: LOGGING},
);

module.exports = sequelize;
