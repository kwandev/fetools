<template>
  <div class="p-5">
    <header class="mb-4 flex items-center justify-between">
      <button class="px-2 text-lg" @click="onBack">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
    </header>

    <main>
      <form action="" method="post" @submit.prevent>
        <fieldset>
          <div class="grid grid-cols-2 grid-rows-2 gap-1">
            <input
              id="A"
              ref="refA"
              v-model="a"
              type="number"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              :class="{ '!text-lg font-bold': active === 'a' }"
              placeholder="A"
              @keypress.enter="calc"
            />
            <input
              id="B"
              ref="refB"
              v-model="b"
              type="number"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              :class="{ '!text-lg font-bold': active === 'b' }"
              placeholder="B"
              @keypress.enter="calc"
            />
            <input
              id="C"
              ref="refC"
              v-model="c"
              type="number"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              :class="{ '!text-lg font-bold': active === 'c' }"
              placeholder="C"
              @keypress.enter="calc"
            />
            <input
              id="D"
              ref="refD"
              v-model="d"
              type="number"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              :class="{ '!text-lg font-bold': active === 'd' }"
              placeholder="D"
              @keypress.enter="calc"
            />
          </div>

          <button
            type="button"
            class="my-2 block w-full rounded-md bg-gradient-to-br from-green-400 to-blue-500 p-3 text-center text-sm text-white hover:bg-gradient-to-bl focus:ring-2 focus:ring-blue-500"
            @click="calc"
          >
            계산하기
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

      <hr class="my-4 border-slate-300" />

      <section class="grid grid-cols-2 gap-1">
        <button
          type="button"
          class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:ring-2 focus:ring-cyan-300"
          @click="setRatio(16, 9)"
        >
          16 : 9
        </button>
        <button
          type="button"
          class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:ring-2 focus:ring-cyan-300"
          @click="setRatio(9, 16)"
        >
          9 : 16
        </button>
        <button
          type="button"
          class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:ring-2 focus:ring-cyan-300"
          @click="setRatio(4, 3)"
        >
          4 : 3
        </button>
        <button
          type="button"
          class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:ring-2 focus:ring-cyan-300"
          @click="setRatio(3, 4)"
        >
          3 : 4
        </button>
        <button
          type="button"
          class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:ring-2 focus:ring-cyan-300"
          @click="setRatio(16, 10)"
        >
          16 : 10 (8 : 5)
        </button>
        <button
          type="button"
          class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:ring-2 focus:ring-cyan-300"
          @click="setRatio(10, 16)"
        >
          10 : 16 (8 : 5)
        </button>
        <button
          type="button"
          class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:ring-2 focus:ring-cyan-300"
          @click="setRatio(3, 2)"
        >
          3 : 2
        </button>
        <button
          type="button"
          class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:ring-2 focus:ring-cyan-300"
          @click="setRatio(2, 3)"
        >
          2 : 3
        </button>
        <button
          type="button"
          class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:ring-2 focus:ring-cyan-300"
          @click="setRatio(5, 4)"
        >
          5 : 4
        </button>
        <button
          type="button"
          class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:ring-2 focus:ring-cyan-300"
          @click="setRatio(4, 5)"
        >
          4 : 5
        </button>
        <button
          type="button"
          class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:ring-2 focus:ring-cyan-300"
          @click="setRatio(21, 9)"
        >
          21 : 9 (7 : 3)
        </button>
        <button
          type="button"
          class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:ring-2 focus:ring-cyan-300"
          @click="setRatio(9, 21)"
        >
          9 : 21 (3 : 7)
        </button>
      </section>

      <section class="mt-6">
        <div>
          <ul class="text-sm">
            <li>A : B = C : D</li>
            <li>3군데 입력 후 계산하기</li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const [router] = [useRouter()];

const onBack = () => {
  router.back();
};

const a = ref(null);
const b = ref(null);
const c = ref(null);
const d = ref(null);

const refA = ref(null);
const refB = ref(null);
const refC = ref(null);
const refD = ref(null);

const active = ref('');

const calc = () => {
  if (a.value && b.value && c.value) {
    d.value = (b.value * c.value) / a.value;
    active.value = 'd';
    return;
  }

  if (a.value && b.value && d.value) {
    c.value = (a.value * d.value) / b.value;
    active.value = 'c';
    return;
  }

  if (a.value && c.value && d.value) {
    b.value = (a.value * d.value) / c.value;
    active.value = 'b';
    return;
  }

  if (b.value && c.value && d.value) {
    a.value = (b.value * c.value) / d.value;
    active.value = 'a';
    return;
  }

  alert('3군데 입력 후 계산하기');
};

const reset = () => {
  a.value = null;
  b.value = null;
  c.value = null;
  d.value = null;
  active.value = '';
};

const setRatio = (aRatio: number, bRatio: number) => {
  reset();
  a.value = aRatio;
  b.value = bRatio;
  refC.value.focus();
};

onMounted(() => {
  refA.value.focus();
});
</script>
