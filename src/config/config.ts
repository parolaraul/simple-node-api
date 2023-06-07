export const config = {
    PORT: parseInt(process.env.PORT || '3000'),
    LOG_LEVEL: process.env.LOG_LEVEL || 'dev',
    FRONTEND_URL: process.env.FRONTEND_URL || 'localhost:3000',
    BASE_PATH: process.env.BASE_PATH || '/simple-app',
}
