<template>
  <UButton color="gray" variant="ghost" @click="$colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark'">
    <UIcon :name="$colorMode.preference === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'" class="h-5 w-5" />
  </UButton>
</template>
