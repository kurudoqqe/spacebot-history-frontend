<script setup>
import {ref} from "vue";
import MenuIcon from "@/components/icons/menu.svg"
import SidebarComponent from "@/components/SidebarComponent.vue";

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
  </main>
</template>

<style scoped>
main {
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
</style>
