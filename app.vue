<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 text-center">
    <div class="p-8 rounded-2xl shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <h1 class="text-3xl font-bold mb-2 text-gray-800 dark:text-white">Grepolis Temple Notifier</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        by
        <a href="https://github.com/JosWigchert" target="_blank"
          class="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          JosWigchert
        </a>
      </p>
      <a href="script.user.js" target="_blank"
        class="inline-block px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition font-medium">
        Install Script
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Grepolis Temple Notifier' })
</script>