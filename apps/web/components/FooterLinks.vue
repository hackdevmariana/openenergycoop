<template>
  <div>
    <h3 class="font-bold mb-4">Links</h3>
    <UNavigationLinks :links="links" vertical />
  </div>
</template>

<script setup>
const links = [
  { label: 'About', to: '/about' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
]
</script>
