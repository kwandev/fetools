<template>
  <main class="p-5">
    <div>
      <ul>
        <li>
          <button
            type="button"
            class="block w-full rounded-md bg-gradient-to-br from-green-400 to-blue-500 p-3 text-center text-sm"
            @click="onClickRatio"
          >
            비율계산기
          </button>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const onClickRatio = () => {
  router.push({
    name: 'Ratio',
  });
};
</script>
