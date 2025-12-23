<template>
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-8">Dashboard</h1>
    <p class="text-xl mb-12">Welcome to your protected dashboard.</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <UCard>
        <h3 class="text-xl font-bold">Users</h3>
        <p class="text-3xl mt-4">1,234</p>
      </UCard>
      <UCard>
        <h3 class="text-xl font-bold">Revenue</h3>
        <p class="text-3xl mt-4">€45,678</p>
      </UCard>
      <UCard>
        <h3 class="text-xl font-bold">Active</h3>
        <p class="text-3xl mt-4">89%</p>
      </UCard>
    </div>
  </div>
</template>
