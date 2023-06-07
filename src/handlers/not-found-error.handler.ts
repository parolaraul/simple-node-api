import type {NextFunction, Request, Response} from 'express';
import {NotFoundError} from "../exceptions/not-found.error";

export default function notFoundErrorHandler(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _req: Request,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction,
): void {
    throw new NotFoundError('Oops, nothing here');
}
