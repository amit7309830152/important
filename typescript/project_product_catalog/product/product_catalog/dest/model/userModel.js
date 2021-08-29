"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const { DataTypes, Model } = require('sequelize');
// type newUser = Omit<IUser, 'id'>
class User extends Model {
    constructor(user) {
        super();
        this.id = user.id;
        this.name = user.name;
        this.mobile = user.mobile;
        this.password = user.password;
        this.email = user.email;
    }
    static async getUser(mobile) {
        try {
            const resultDb = await User.findAll({
                where: {
                    mobile: mobile
                }
            });
            return resultDb;
        }
        catch (error) {
            console.log('error', error);
            throw new Error(error);
        }
    }
    static async getDetailByUserName(userName) {
        try {
            const user = await User.findAll({
                where: {
                    mobile: userName
                }
            });
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.User = User;
User.init({
    name: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    mobile: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
}, {
    sequelize: db_1.Db.dbConnect(),
    tableName: 'User',
    timestamps: false
});
User.sync().then(() => {
    console.log('User table created');
});
