<template>
  <div id="layout" class="mx-auto flex flex-col text-white">
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <!-- <Suspense> -->
        <component :is="Component" />
        <!-- </Suspense> -->
      </Transition>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(0.05rem);
}
</style>
