<template>
  <div class="p-5">
    <Header />

    <main>
      <form action="" method="post" @submit.prevent>
        <fieldset>
          <codemirror
            v-model="jsonText"
            placeholder="Code goes here..."
            :style="{ width: '100%', maxWidth: '460px', height: '400px' }"
            :autofocus="true"
            :indent-with-tab="true"
            :tab-size="2"
            :scroll-into-view="true"
            :extensions="extensions"
          />

          <button
            type="button"
            class="my-2 block w-full rounded-md bg-gradient-to-br from-green-400 to-blue-500 p-3 text-center text-sm text-white hover:bg-gradient-to-bl focus:ring-2 focus:ring-blue-500"
            @click="convert"
          >
            변환하기
          </button>
          <button
            type="button"
            class="block w-full rounded-md p-2 text-center text-xs text-white hover:bg-gradient-to-bl focus:ring-2 focus:ring-blue-500"
            @click="reset"
          >
            초기화
          </button>
        </fieldset>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/commons/Header.vue';
import { Codemirror } from 'vue-codemirror';
import { json } from '@codemirror/lang-json';
import { oneDark } from '@codemirror/theme-one-dark';

const extensions = [json(), oneDark];

const jsonText = ref('');

const convert = () => {
  if (jsonText.value === '') {
    return;
  }

  try {
    const parse = JSON.parse(jsonText.value);
    const result = JSON.stringify(parse, null, 2);
    jsonText.value = result;
  } catch (e) {
    alert('JSON 형식이 아닙니다.');
  }
};

const reset = () => {
  jsonText.value = '';
};
</script>
