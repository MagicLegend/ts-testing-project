import { Sequelize } from 'sequelize-typescript';
import T from './models/T';
import A from './models/A';

// const sequelize = new Sequelize('testdb', 'root', 'testdb', {
//     dialect: 'mysql',
//     // database: 'testdb',
//     // username: 'root',
//     // password: 'testdb',
//     host: 'localhost',
//     port: 3306,
//     models: [`${__dirname}/models`],
// });

const sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'testdb',
    username: 'root',
    password: 'testdb',
    host: 'localhost',
    port: 3306,
    // modelPaths: [`${__dirname}/models`],
});

sequelize.addModels([A, T]);

export default sequelize;
