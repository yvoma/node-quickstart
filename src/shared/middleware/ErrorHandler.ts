import { Request, Response, NextFunction } from 'express';

export class QuickstartError extends Error {
    public statusCode: number;
    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

export const errorHandler = (
    err: QuickstartError,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    res.status(err.statusCode || 500).json({
        error: {
            message: err.message || 'Erreur interne du serveur',
            statusCode: err.statusCode,
        },
    });
};
