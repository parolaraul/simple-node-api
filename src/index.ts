require('dotenv').config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import {config} from "./config/config";
import {router} from "./routes/router";

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(router);

const port = config.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}!`));
