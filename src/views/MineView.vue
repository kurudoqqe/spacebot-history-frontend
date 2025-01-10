<script setup>
import {ref} from "vue";
import MenuIcon from "@/components/icons/menu.svg"
import SidebarComponent from "@/components/SidebarComponent.vue";
import MoonCrystal from "@/components/MoonCrystal.vue";

const isSidebarActive = ref(false)

const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value
}

</script>

<template>
  <main>
    <SidebarComponent :toggle-sidebar="toggleSidebar" :is-sidebar-active="isSidebarActive"/>
    <img :src="MenuIcon" alt=""
         class="menu-icon" @click="toggleSidebar"
         v-if="!isSidebarActive">
    <MoonCrystal class="crystal" size="medium"/>
  </main>
</template>

<style scoped>
main {
  position: relative;
  height: fit-content;
  margin: 0 auto;
  background-image: url("../assets/images/mine-background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.menu-icon {
  margin: 1.5rem 0 0 1.5rem;
  width: 1.75rem;
  height: 1.75rem;
}

.crystal {
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 0;
}
</style>
