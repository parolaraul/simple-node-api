import {StatusCodes} from "http-status-codes";

export class HttpError extends Error {
    statusCode: number;
    constructor(message: string, statusCode?: number) {
        super(message);
        this.statusCode = statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    }
}
