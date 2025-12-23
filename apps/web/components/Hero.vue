<template>
  <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-32">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-6">{{ title }}</h1>
      <p class="text-xl md:text-2xl mb-8">{{ subtitle }}</p>
      <button class="btn btn-light text-lg px-8 py-4">Get Started</button>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Welcome to Boilerplate' },
  subtitle: { type: String, default: 'The ultimate starter for your next full-stack project' },
})
</script>
