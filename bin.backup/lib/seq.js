"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
// const sequelize = new Sequelize('testdb', 'root', 'testdb', {
//     dialect: 'mysql',
//     // database: 'testdb',
//     // username: 'root',
//     // password: 'testdb',
//     host: 'localhost',
//     port: 3306,
//     models: [`${__dirname}/models`],
// });
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    database: 'testdb',
    username: 'root',
    password: 'testdb',
    host: 'localhost',
    port: 3306,
});
//# sourceMappingURL=seq.js.map