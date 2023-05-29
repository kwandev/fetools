<template>
  <div id="error_layout" class="flex min-h-screen flex-col">
    <router-view v-slot="{ Component }">
      <Transition>
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>
