"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const pool = new Pool({
//     user: "postgres",
//     password: "root",
//     host: "localhost",
//     port: 5432,
//     database: "product_catalog"
// });
// export { pool }
const Sequelize = require('sequelize');
class Db {
    static dbConnect() {
        const dbConnection = new Sequelize('product_catalog', 'postgres', 'root', {
            host: 'localhost',
            dialect: 'postgres',
            operatorsAliases: false,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
        });
        return dbConnection;
    }
}
exports.Db = Db;
