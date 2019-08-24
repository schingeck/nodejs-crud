// @ts-ignore
import { Sequelize } from 'sequelize-typescript';

const sql = new Sequelize({
  database: process.env.DATABASE_HOST,
  dialect: 'mysql',
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  storage: ':memory:',
  models: [`${__dirname}/models`],
});

export default sql;
