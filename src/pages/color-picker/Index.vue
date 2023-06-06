<template>
  <div class="p-5">
    <Header />

    <main>
      <form action="" method="post" @submit.prevent>
        <fieldset>
          <div class="flex items-center justify-center gap-x-4">
            <input
              v-model="color"
              type="color"
              class="m-0 h-16 w-16 cursor-pointer !appearance-none rounded-lg"
            />

            <div class="flex flex-col gap-y-2">
              <div class="flex items-center">
                <label for="hex" class="text-sm">HEX</label>
                <input
                  id="hex"
                  type="text"
                  :value="color"
                  class="ml-2 rounded-md p-2 text-sm text-black"
                  readonly
                />
              </div>
              <div class="flex items-center">
                <label for="rgb" class="text-sm">RGB</label>
                <input
                  id="rgb"
                  type="text"
                  :value="rgbColor"
                  class="ml-2 rounded-md p-2 text-sm text-black"
                  readonly
                />
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Header from '@/components/commons/Header.vue';

const color = ref('#ffffff');
const rgbColor = computed(() => {
  return `rgb(${hexToRgb(color.value).r},${hexToRgb(color.value).g},${hexToRgb(color.value).b})`;
});

const hexToRgb = (hex: string) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};
</script>

<style lang="scss" scoped>
input[type='color'] {
  background: none;

  &::-webkit-color-swatch {
    border-radius: 8px;
    border: 2px solid #ffffff;
  }
}
</style>
