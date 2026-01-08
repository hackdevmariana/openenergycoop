export const authConfig = {
  jwtSecret: process.env.JWT_SECRET || 'temporal-secret-super-largo-2026',
  jwtExpiresIn: 900, // 15 min
  refreshSecret: process.env.REFRESH_SECRET || 'temporal-refresh-secret-super-largo-2026',
  refreshExpiresIn: 604800, // 7 days
};
