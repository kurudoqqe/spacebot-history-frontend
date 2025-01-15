<script setup>
import {ref} from "vue";
import MenuIcon from "@/components/icons/menu.svg"
import MoonCrystal from "@/components/MoonCrystal.vue";
import {usePickaxeStore} from "@/store/pickaxeState.js";
import {useCrystalCountStore} from "@/store/crystalCount.js"
import SidebarComponent from "@/components/SidebarComponent.vue";
import CrystalCountComponent from "@/components/CrystalCountComponent.vue";

const isSidebarActive = ref(false)

const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value
}

const crystal_store = useCrystalCountStore();
const pickaxe_store = usePickaxeStore()

</script>

<template>
  <main>
    <SidebarComponent :toggle-sidebar="toggleSidebar" :is-sidebar-active="isSidebarActive"/>
    <img :src="MenuIcon" alt=""
         class="menu-icon" @click="toggleSidebar"
         v-if="!isSidebarActive">
    <CrystalCountComponent size="large" :count="crystal_store.crystalCount"
    class="crystal-count"/>
    <h1 v-if="crystal_store.crystalCount === 0">Кликай!</h1>
    <MoonCrystal class="crystal-main" size="medium"
                 :clickable="true" :farming="false"/>
    <MoonCrystal class="crystal-additional-1" size="small"
                 :clickable="false" :farming="pickaxe_store.isActivePickaxe1"/>
    <MoonCrystal class="crystal-additional-2" size="small"
                 :clickable="false" :farming="pickaxe_store.isActivePickaxe2"/>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss";

main {
  position: relative;
  height: fit-content;
  margin: 0 auto;
  background-image: url("../assets/images/mine-background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  > h1 {
    @include variables.capital-text;
    color: var(--text-color);
    text-shadow: var(--text-shadow);
    font-size: 2rem;
    padding: 1rem;
    position: absolute;
    top: 25%;
    left: 25%;
  }
}

.menu-icon {
  margin: 1.5rem 0 0 1.5rem;
  width: 1.75rem;
  height: 1.75rem;
}

.crystal-count {
  position: absolute;
  top: 10%;
  left: 27.5%;
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
