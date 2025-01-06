<script setup>
import {ref} from "vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
import MenuIcon from "@/components/icons/menu.svg"
import RocketComponent from "@/components/RocketComponent.vue";

const isSidebarActive = ref(false)

const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value
}

</script>

<template>
  <main>
    <SidebarComponent :toggle-sidebar="toggleSidebar"
      v-if="isSidebarActive"/>
    <img :src="MenuIcon" alt=""
         class="menu-icon" @click="toggleSidebar"
         v-else>
    <RocketComponent :stage="1"/>
  </main>
</template>

<style scoped>
main {
  position: relative;
  height: fit-content;
  margin: 0 auto;
  background-image: url("../assets/images/moon-background.jpg");
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
