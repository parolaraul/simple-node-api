export interface UserRto{
    username: string;
}

export interface UserModel extends UserRto{
    _id: any;
    password: string;
    created_at: Date;
}

export class User implements UserModel{
    _id: any;
    created_at: Date;
    password: string;
    username: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this.created_at = new Date();
    }
}
