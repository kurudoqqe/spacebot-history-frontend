<script setup>
import {ref} from "vue";
import MenuIcon from "@/components/icons/menu.svg"
import {useStageStore} from "@/store/currentStage.js"
import RocketComponent from "@/components/RocketComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";

const isSidebarActive = ref(false)

const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value
}

const stage_store = useStageStore();

</script>

<template>
  <main>
    <SidebarComponent :toggle-sidebar="toggleSidebar" :is-sidebar-active="isSidebarActive"/>
    <img :src="MenuIcon" alt=""
         class="menu-icon" @click="toggleSidebar"
         v-if="!isSidebarActive">
    <RocketComponent :stage="stage_store.currentRocketStage"/>
  </main>
</template>

<style scoped>
main {
  position: relative;
  height: fit-content;
  margin: 0 auto;
  background-image: url("../assets/images/surface-background.png");
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
