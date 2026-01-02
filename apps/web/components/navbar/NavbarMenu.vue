<template>
  <UNavigationLinks :links="links" />
</template>

<script setup>
const links = [
  { label: 'Home', to: '/' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'About', to: '/about' },
]
</script>
