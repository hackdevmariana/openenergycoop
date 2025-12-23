<template>
  <nav class="bg-white dark:bg-gray-900 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <NavbarLogo />
        <NavbarMenuItems class="hidden md:flex" />
        <NavbarDayNightSwitch />
        <NavbarCTA />
      </div>
    </div>
  </nav>
</template>

<script setup>
import NavbarLogo from './NavbarLogo.vue'
import NavbarMenuItems from './NavbarMenuItems.vue'
import NavbarDayNightSwitch from './NavbarDayNightSwitch.vue'
import NavbarCTA from './NavbarCTA.vue'
</script>
