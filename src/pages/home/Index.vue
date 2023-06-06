<template>
  <main class="p-5">
    <div>
      <ul>
        <li class="mt-3 first:mt-0">
          <button
            type="button"
            class="block w-full rounded-md bg-gradient-to-br from-green-400 to-blue-500 p-3 text-center text-sm"
            @click="onClick('Ratio')"
          >
            Ratio Calculator
          </button>
        </li>
        <li class="mt-3 first:mt-0">
          <button
            type="button"
            class="block w-full rounded-md bg-gradient-to-br from-green-400 to-blue-500 p-3 text-center text-sm"
            @click="onClick('JsonFormatter')"
          >
            JSON Formatter
          </button>
        </li>
        <li class="mt-3 first:mt-0">
          <button
            type="button"
            class="block w-full rounded-md bg-gradient-to-br from-green-400 to-blue-500 p-3 text-center text-sm"
            @click="onClick('ColorPicker')"
          >
            Color Picker
          </button>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const onClick = (routeName: string) => {
  router.push({
    name: routeName,
  });
};
</script>
