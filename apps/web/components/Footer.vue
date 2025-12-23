<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <FooterLogo />
      <FooterMenuItems />
      <FooterNewsletter />
    </div>
    <div class="mt-8 text-center text-sm">
      © 2025 Boilerplate. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import FooterLogo from './FooterLogo.vue'
import FooterMenuItems from './FooterMenuItems.vue'
import FooterNewsletter from './FooterNewsletter.vue'
</script>
