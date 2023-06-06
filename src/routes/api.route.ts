import {Router} from "express";
import authHandler from "../handlers/auth.handler";

const apiRoute = Router();

// Public Routes

apiRoute.use(authHandler);

// Private Routes

export default apiRoute;
