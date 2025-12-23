<template>
  <button @click="$colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark'" class="p-2 rounded">
    <Icon name="heroicons:moon" v-if="$colorMode.preference === 'light'" class="h-6 w-6" />
    <Icon name="heroicons:sun" v-else class="h-6 w-6 text-yellow-400" />
  </button>
</template>
