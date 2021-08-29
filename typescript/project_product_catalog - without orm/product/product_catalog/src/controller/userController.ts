import { Request, Response, NextFunction, RequestHandler } from 'express'
import { User } from '../model/userModel'
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class UserController {
    public static async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await User.saveUser({ name: req.body.name, mobile: req.body.mobile, email: req.body.email, password: req.body.password })
            user.password = '********';
            res.status(200).send({ status: true, message: 'New user created', data: user })
        } catch (error) {
            res.status(500).send({ status: false, message: 'Something went wrong' })
        }
    }

    public static async getUser(req: Request | any, res: Response, next: NextFunction) {
        try {
            const user = await User.getDetailByUserName(req.headers.tokenDetail.mobile)

            res.status(200).send({ status: true, message: 'New user data', data: { user } })
        } catch (error) {
            res.status(500).send({ status: false, message: 'Something went wrong' })
        }
    }

    public static async login(req: Request, res: Response, next: NextFunction) {
        try {
            let username: string = '';
            let password: string = '';
            if (!req.body.user_name) {
                res.status(400).send({ status: false, message: 'user_name is missing' })
            } else {
                username = req.body.user_name
            }
            if (!req.body.password) {
                res.status(400).send({ status: false, message: 'password is missing' })
            } else {
                password = req.body.password
            }

            const user = await User.getDetailByUserName(username)
            if (user.rows.length == 0) {
                res.status(401).send({ status: false, message: 'User does not exist' })
            }
            const isMatch = await bcrypt.compare(password, user.rows[0].password)
            if (isMatch) {
                var token = jwt.sign({
                    mobile: user.rows[0].mobile,
                    id: user.rows[0].id
                }, 'secret', {
                    expiresIn: '2 days'
                });
                res.status(200).send({ status: true, message: 'success', data: { user_id: user.rows[0].user_id, token: token } })
            } else {
                res.status(401).send({ status: false, message: 'Password is incorrect' })
            }
        } catch (error) {
            res.status(500).send({ status: false, message: 'Something went wrong' })
        }
    }
}
