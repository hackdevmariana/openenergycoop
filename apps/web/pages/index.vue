<template>
  <div>
    <Hero />
    <Content>
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-8">Full-stack Monorepo Starter</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard>
            <h3 class="text-2xl font-bold mb-4">Backend</h3>
            <p>NestJS + Prisma + JWT Auth</p>
          </UCard>
          <UCard>
            <h3 class="text-2xl font-bold mb-4">Web</h3>
            <p>Nuxt 3 + Tailwind + Nuxt UI</p>
          </UCard>
          <UCard>
            <h3 class="text-2xl font-bold mb-4">Mobile</h3>
            <p>Expo + React Native</p>
          </UCard>
        </div>
      </div>
    </Content>
  </div>
</template>
