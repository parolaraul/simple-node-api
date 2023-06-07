import type {NextFunction, Request, Response} from 'express';
import {log} from '../common/log';
import {AuthError} from "../exceptions/auth.error";
import {userService} from "../services/user.service";

export default function authHandler(
    req: Request,
    res: Response,
    next: NextFunction,
): void {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        throw new AuthError('No token provided');
    }
    try {
        const decoded = userService.verifyToken(token);
        req.headers.username = decoded.username;
        log.info('Successful authentication -> ' + decoded);
        next();
    } catch (error) {
        throw new AuthError('Invalid token');
    }
}
