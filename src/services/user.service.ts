import {createUser, findUserByUsername, getAllUsers} from "../databases/fake.database";
import jwt from "jsonwebtoken";
import {AuthError} from "../exceptions/auth.error";
import * as fs from "fs";
import * as path from "path";

const PrivateKey = fs.readFileSync(path.join(__dirname, '../../privateKey.key'), 'utf8');

class UserService {

    private static generateToken(payload: { username: string }) {
        return jwt.sign(payload, PrivateKey, {expiresIn: '1h', algorithm: 'RS512'});
    }

    getAllUsers() {
        return getAllUsers();
    }

    createUser(userReq: { username: string }) {
        return createUser(userReq);
    }

    login(username: string, password: string) {
        if (findUserByUsername(username)?.password === password) {
            return {token: UserService.generateToken({username})};
        } else {
            throw new AuthError('Invalid credentials');
        }
    }

    verifyToken(token: string): any {
        return jwt.verify(token, PrivateKey);
    }

}

export const userService = new UserService();
