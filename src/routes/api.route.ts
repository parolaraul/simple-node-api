import {Router} from "express";
import authHandler from "../handlers/auth.handler";
import userRoute from "./user.route";
import accessRoute from "./access.route";

const apiRoute = Router();

// Public Routes
apiRoute.use(accessRoute);

apiRoute.use(authHandler);

// Private Routes
apiRoute.use(userRoute);

export default apiRoute;
