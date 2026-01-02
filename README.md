# NestJS + Nuxt 3 + Expo Monorepo Boilerplate

A full-stack monorepo starter template with:

- **Backend**: NestJS (TypeScript) + Prisma 7 + PostgreSQL + Redis + JWT Auth
- **Web**: Nuxt 3 (TypeScript) + Tailwind CSS + Nuxt UI + Pinia + i18n
- **Mobile**: Expo (React Native + TypeScript)

Perfect for SaaS, cooperatives, dashboards, apps with web + mobile.

## Features

- Monorepo with pnpm workspaces
- Authentication (register/login/refresh) with JWT + bcrypt
- PostgreSQL + Redis in Docker Compose
- Nuxt 3 with SSR, Tailwind, dark mode, responsive layout
- Expo for cross-platform mobile
- Ready for multi-tenancy, roles, invitations

## Quick Start

```bash
git clone https://github.com/hackdevmariana/openenergycoop.git
cd openenergycoop

# Use Node 22
nvm use 22

# Install dependencies
pnpm install

# Start all services (DB + Redis + API + Web + Mobile)
pnpm start
```

URLs:

- API: http://localhost:3000
- Web: http://localhost:3001
- Mobile: Expo (scan QR or open in Expo Go)
- Prisma Studio: pnpm --filter api prisma studio
