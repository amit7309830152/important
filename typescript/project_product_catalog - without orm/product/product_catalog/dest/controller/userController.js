"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userModel_1 = require("../model/userModel");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    static async createUser(req, res, next) {
        try {
            const user = await userModel_1.User.saveUser({ name: req.body.name, mobile: req.body.mobile, email: req.body.email, password: req.body.password });
            user.password = '********';
            res.status(200).send({ status: true, message: 'New user created', data: user });
        }
        catch (error) {
            res.status(500).send({ status: false, message: 'Something went wrong' });
        }
    }
    static async getUser(req, res, next) {
        try {
            const user = await userModel_1.User.getDetailByUserName(req.headers.tokenDetail.mobile);
            res.status(200).send({ status: true, message: 'New user data', data: { user } });
        }
        catch (error) {
            res.status(500).send({ status: false, message: 'Something went wrong' });
        }
    }
    static async login(req, res, next) {
        try {
            let username = '';
            let password = '';
            if (!req.body.user_name) {
                res.status(400).send({ status: false, message: 'user_name is missing' });
            }
            else {
                username = req.body.user_name;
            }
            if (!req.body.password) {
                res.status(400).send({ status: false, message: 'password is missing' });
            }
            else {
                password = req.body.password;
            }
            const user = await userModel_1.User.getDetailByUserName(username);
            if (user.rows.length == 0) {
                res.status(401).send({ status: false, message: 'User does not exist' });
            }
            const isMatch = await bcryptjs_1.default.compare(password, user.rows[0].password);
            if (isMatch) {
                var token = jsonwebtoken_1.default.sign({
                    mobile: user.rows[0].mobile,
                    id: user.rows[0].id
                }, 'secret', {
                    expiresIn: '2 days'
                });
                res.status(200).send({ status: true, message: 'success', data: { user_id: user.rows[0].user_id, token: token } });
            }
            else {
                res.status(401).send({ status: false, message: 'Password is incorrect' });
            }
        }
        catch (error) {
            res.status(500).send({ status: false, message: 'Something went wrong' });
        }
    }
}
exports.UserController = UserController;
