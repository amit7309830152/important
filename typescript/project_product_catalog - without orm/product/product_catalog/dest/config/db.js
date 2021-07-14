"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "product_catalog"
});
exports.pool = pool;
// const Sequelize = require('sequelize');
// export class Db {
//     public static dbConnect() {
//         const dbConnection = new Sequelize('product_catalog', 'postgres', 'root', {
//             host: 'localhost',
//             dialect: 'postgres',
//             operatorsAliases: false,
//             pool: {
//                 max: 5,
//                 min: 0,
//                 acquire: 30000,
//                 idle: 10000
//             },
//         });
//         return dbConnection
//     }
// }
