require('dotenv').config();

import app from "./api-server";
import {log} from "./common/log";
import {config} from "./config/config";


const port = config.PORT;
app.listen(port, () => log.info(`✅ Started server on port ${port}`));
