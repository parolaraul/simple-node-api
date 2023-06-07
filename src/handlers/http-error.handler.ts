import type {NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {log} from '../common/log';
import {HttpError} from "../exceptions/http.error";

export default function httpErrorHandler(
    err: HttpError | Error,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction,
): void {
    const statusCode = (err instanceof HttpError) ? err.statusCode : StatusCodes.INTERNAL_SERVER_ERROR;
    log.error(`[${statusCode}] ${err.message || err}`)
    res.status(statusCode).json({error: err.message || 'Oops, something went wrong!'});
}
