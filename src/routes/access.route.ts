import {Router} from "express";
import {userService} from "../services/user.service";

const accessRoute = Router();

accessRoute.post('/login', (req, res) => {
    const {username, password} = req.body;
    res.status(200).send(userService.login(username, password));
});

export default accessRoute;
