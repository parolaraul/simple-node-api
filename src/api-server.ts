import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from 'helmet';
import {log} from "./common/log";
import {config} from "./config/config";
import httpErrorHandler from "./handlers/http-error.handler";
import apiRoute from "./routes/api.route";
import healthRoute from "./routes/health.route";
import notFoundErrorHandler from "./handlers/not-found-error.handler";


const app = express();

// Middlewares
app.use(bodyParser.json({limit: '5000mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());
app.use(cors());
app.use(log.middleware());

// Health check
app.use(config.BASE_PATH, healthRoute);

// Routes
app.use(config.BASE_PATH + '/api', apiRoute);

// Error Handler
app.use(notFoundErrorHandler);
app.use(httpErrorHandler);

export default app;
