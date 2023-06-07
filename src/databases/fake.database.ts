import {User, UserModel} from "./models/user.model";
import {log} from "../common/log";
import crypto from "crypto";

const users = [
    new User('admin', 'password')
]

export const getAllUsers = (): UserModel[] => {
    log.info(`getAllUsers | ${users.length}`);
    return users;
}

export const findUserByUsername = (username: string): UserModel | undefined => {
    log.info(`findUserByUsername | ${username}`);
    return users.find(u => u.username === username);
}

export const createUser = (user: { username: string }): UserModel => {
    log.info(`createUser | ${JSON.stringify(user)}`);
    const newUser = new User(user.username, crypto.randomUUID());
    users.push(newUser);
    return newUser;
}
