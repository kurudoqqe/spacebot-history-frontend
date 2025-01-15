<script setup>
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <transition :name="route.meta.transition">
    <router-view v-slot="{Component}">
      <component :is="Component"/>
    </router-view>
  </transition>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
