import { pool } from "../config/db";
import bcrypt from "bcryptjs";

interface IUser {
    id: number,
    name: string,
    mobile: number,
    password: string,
    email: string
}

type newUser = Omit<IUser, 'id'>

export class User implements IUser {

    id: number;
    name: string;
    mobile: number;
    password: string;
    email: string;

    constructor() {
        this.id = 0
        this.name = ''
        this.mobile = 0
        this.password = ''
        this.email = ''
    }

    public static async getDetailByUserName(username: string) {
        try {
            const data = await pool.query(
                `select * from user_details where mobile = ${username} or email = '${username}'`
            );
            return data.rows[0]
        } catch (error) {
            console.log(error);
            throw new Error('There is error in query');
        }
    }

    public static async saveUser(user: newUser) {
        let newUser = new User()
        newUser.name = user.name;
        newUser.mobile = user.mobile;
        newUser.email = user.email;
        newUser.password = await bcrypt.hash(user.password, 8);
        try {
            const data = await pool.query(
                "INSERT INTO user_details (name,mobile,password) VALUES($1,$2,$3) RETURNING*",
                [newUser.name, newUser.mobile, newUser.password]
            );
            newUser.id = data.rows[0].user_id;
            return newUser
        } catch (error) {
            console.log(error);
            throw new Error('There is error in query');
        }
    }
}