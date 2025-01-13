<script setup>
import { ref } from "vue";
import MenuIcon from "@/components/icons/menu.svg";
import {useCrystalCountStore} from "@/store/crystalCount.js"
import SidebarComponent from "@/components/SidebarComponent.vue";
import CrystalCountComponent from "@/components/CrystalCountComponent.vue";

const isSidebarActive = ref(false);

const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value
}

const store = useCrystalCountStore();

</script>

<template>
  <main>
    <SidebarComponent :toggle-sidebar="toggleSidebar" :is-sidebar-active="isSidebarActive"/>
    <img :src="MenuIcon" alt=""
         class="menu-icon" @click="toggleSidebar"
         v-if="!isSidebarActive">
    <CrystalCountComponent size="large" :count="0"/>
  </main>
</template>

<style scoped>

main {
  height: fit-content;
  margin: 0 auto;
  background-color: var(--default-color);
}

.menu-icon {
  margin: 1.5rem 0 0 1.5rem;
  width: 1.75rem;
  height: 1.75rem;
}
</style>
