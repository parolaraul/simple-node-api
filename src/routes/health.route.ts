import {Router} from "express";

const healthRoute = Router();

healthRoute.get('/health-check', (req, res) => {
    res.status(200).send({status: 'Ok'});
});

export default healthRoute;
