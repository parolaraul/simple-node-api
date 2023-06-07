import {Router} from "express";
import {userService} from "../services/user.service";

const userRoute = Router();

userRoute.get('/users', (req, res) => {
    res.status(200).send(userService.getAllUsers());
});

userRoute.post('/users', (req, res) => {
    res.status(201).send(userService.createUser(req.body));
});

export default userRoute;
