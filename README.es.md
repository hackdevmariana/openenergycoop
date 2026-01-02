# Boilerplate Monorepo: NestJS + Nuxt 3 + Expo

Plantilla completa para proyectos full-stack con:

- **Backend**: NestJS (TypeScript) + Prisma 7 + PostgreSQL + Redis + Auth JWT
- **Web**: Nuxt 3 (TypeScript) + Tailwind CSS + Nuxt UI + Pinia + i18n
- **Mobile**: Expo (React Native + TypeScript)

Ideal para SaaS, cooperativas, dashboards con web y app móvil.

## Características

- Monorepo con pnpm workspaces
- Autenticación completa (register/login/refresh) con JWT + bcrypt
- PostgreSQL + Redis en Docker Compose
- Nuxt 3 con SSR, Tailwind, modo oscuro, layout responsive
- Expo para app móvil multiplataforma
- Preparado para multi-tenancy, roles, invitaciones

## Inicio rápido

```bash
git clone https://github.com/hackdevmariana/openenergycoop.git
cd openenergycoop

# Usa Node 22
nvm use 22

# Instala dependencias
pnpm install

# Levanta todo (DB + Redis + API + Web + Mobile)
pnpm start
```