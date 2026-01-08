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

URLs:

- API: http://localhost:3000
- Web: http://localhost:3001
- Mobile: Expo (escanea QR o abre en Expo Go)
- Prisma Studio: pnpm --filter api prisma studio

## Desarollo 

```bash
pnpm dev:api     # Solo backend
pnpm dev:web     # Solo Nuxt
pnpm dev:mobile  # Solo Expo
pnpm db:down     # Para la DB + Redis
```

## Base de datos

1. Instala PostgreSQL en tu máquina (o usa Docker).

2. Crea una base de datos vacía:

```bash
sudo -u postgres createdb openenergycoop
```

3. Copia el .env.example a .env y configura:

``ènv 
DATABASE_URL="postgresql://postgres:TU_CONTRASEÑA@localhost:5432/openenergycoop?schema=public"
```

4. Ejecuta las migraciones con Prisma:

```bash
pnpm --filter api prisma migrate dev
pnpm --filter api prisma migrate deploy
pnpm --filter api prisma generate
```

## Contribuir

¡Abre issues o PRs cuando quieras!

## Licencia

Licencia GPL V.3.0