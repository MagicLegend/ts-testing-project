import { Sequelize } from 'sequelize-typescript';

// const sequelize = new Sequelize('testdb', 'root', 'testdb', {
//     dialect: 'mysql',
//     // database: 'testdb',
//     // username: 'root',
//     // password: 'testdb',
//     host: 'localhost',
//     port: 3306,
//     models: [`${__dirname}/models`],
// });

export const sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'testdb',
    username: 'root',
    password: 'testdb',
    host: 'localhost',
    port: 3306,
    // modelPaths: [`${__dirname}/models`],
});
