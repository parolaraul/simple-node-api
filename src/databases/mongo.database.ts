import {UserModel} from "./models/user.model";
import {log} from "../common/log";

const users = [
    new UserModel('admin', '21692bca-9029-435f-916f-df998fa4f1b5')
]

const genAPIKey = () => {
    return [...Array(30)]
        .map((e) => ((Math.random() * 36) | 0).toString(36))
        .join('');
};

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
    const newUser = new UserModel(user.username, genAPIKey());
    users.push(newUser);
    return newUser;
}

// TODO add mongo connection
