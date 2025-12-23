<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-primary">Boilerplate</h1>
        </div>
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="text-gray-700 hover:text-primary">Home</NuxtLink>
          <NuxtLink to="/dashboard" class="text-gray-700 hover:text-primary">Dashboard</NuxtLink>
          <NuxtLink to="/login" class="btn btn-outline">Login</NuxtLink>
          <NuxtLink to="/register" class="btn btn-primary">Register</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
