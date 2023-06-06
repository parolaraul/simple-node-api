import type {NextFunction, Request, Response} from 'express';
import {NotFoundError} from "../exceptions/not-found.error";

// eslint-disable-file @typescript-eslint/no-unused-vars
export default function notFoundErrorHandler(
    _req: Request,
    _res: Response,
    _next: NextFunction,
): void {
    throw new NotFoundError('Oops, nothing here');
}
