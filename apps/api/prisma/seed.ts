import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const defaults = [
    { key: 'appName', value: 'Boilerplate' },
    { key: 'primaryColor', value: '#3b82f6' },
    { key: 'welcomeMessage', value: 'Bienvenido a tu boilerplate full-stack' },
    { key: 'maintenanceMode', value: 'false' },
  ]

  for (const item of defaults) {
    await prisma.config.upsert({
      where: { key: item.key },
      update: {},
      create: item,
    })
  }
  console.log('Config seed completado')
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())
