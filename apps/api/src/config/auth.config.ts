import 'dotenv/config';

export const authConfig = {
  jwtSecret: process.env.JWT_SECRET || 'dev-secret-fallback',
  jwtExpiresIn: 900,
  refreshSecret: process.env.REFRESH_SECRET || 'dev-refresh-fallback',
  refreshExpiresIn: 604800,
};
