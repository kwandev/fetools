<template>
  <header class="mb-4 flex items-center justify-between">
    <button class="px-2 text-lg" @click="onBack">
      <i class="fa-solid fa-arrow-left"></i>
    </button>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const [router] = [useRouter()];

const onBack = () => {
  router.back();
};
</script>
