import type {NextFunction, Request, Response} from 'express';
import {log} from '../common/log';
import {AuthError} from "../exceptions/auth.error";
import jwt from "jsonwebtoken";
import {config} from "../config/config";

export default async function authHandler(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        throw new AuthError('No token provided');
    }
    try {
        const decoded = await jwt.verify(token, config.JWT_SECRET);
        // req.userId = decoded.id;
        log.info('Successful authentication -> ' + decoded);
        next();
    } catch (error) {
        throw new AuthError('Invalid token');
    }
}
