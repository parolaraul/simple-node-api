export const config = {
    PORT: parseInt(process.env.PORT || '3000'),
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    LOG_LEVEL: process.env.LOG_LEVEL || 'dev',
    BASE_PATH: process.env.BASE_PATH || '/simple-app',
}
