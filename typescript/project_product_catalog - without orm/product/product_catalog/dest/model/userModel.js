"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const db_1 = require("../config/db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class User {
    constructor() {
        this.id = 0;
        this.name = '';
        this.mobile = 0;
        this.password = '';
        this.email = '';
    }
    static async getDetailByUserName(username) {
        try {
            const data = await db_1.pool.query(`select * from user_details where mobile = ${username} or email = '${username}'`);
            return data.rows[0];
        }
        catch (error) {
            console.log(error);
            throw new Error('There is error in query');
        }
    }
    static async saveUser(user) {
        let newUser = new User();
        newUser.name = user.name;
        newUser.mobile = user.mobile;
        newUser.email = user.email;
        newUser.password = await bcryptjs_1.default.hash(user.password, 8);
        try {
            const data = await db_1.pool.query("INSERT INTO user_details (name,mobile,password) VALUES($1,$2,$3) RETURNING*", [newUser.name, newUser.mobile, newUser.password]);
            newUser.id = data.rows[0].user_id;
            return newUser;
        }
        catch (error) {
            console.log(error);
            throw new Error('There is error in query');
        }
    }
}
exports.User = User;
