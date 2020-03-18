import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize('testdb', 'root', 'testdb', {
    dialect: 'mariadb',
    // database: 'ts-example-movies',
    // username: 'root',
    // password: 'testdb',
    host: 'localhost',
    port: 3306,
    models: [`${__dirname}/models`],
});

export default sequelize;
