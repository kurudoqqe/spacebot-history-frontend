<script setup>
import {ref} from "vue";
import MenuIcon from "@/components/icons/menu.svg"
import MoonCrystal from "@/components/MoonCrystal.vue";
import {useCrystalCountStore} from "@/store/crystalCount.js"
import SidebarComponent from "@/components/SidebarComponent.vue";
import CrystalCountComponent from "@/components/CrystalCountComponent.vue";

const isSidebarActive = ref(false)

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
    <CrystalCountComponent size="large" :count="store.crystalCount"
    class="crystal-count"/>
    <MoonCrystal class="crystal-main" size="medium"
                 :clickable="true" :farming="false"/>
    <MoonCrystal class="crystal-additional-1" size="small"
                 :clickable="false" :farming="true"/>
    <MoonCrystal class="crystal-additional-2" size="small"
                 :clickable="false" :farming="true"/>
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

.crystal-count {
  position: absolute;
  top: 10%;
  left: 30%;
}

.crystal-main {
  position: absolute;
  top: 50%;
  left: 35%;
}

.crystal-additional-1 {
  display: inline;
  position: absolute;
  bottom: 5%;
  right: 5%;
}

.crystal-additional-2 {
  display: inline;
  position: absolute;
  bottom: 27.5%;
  left: 10%;
}
</style>
