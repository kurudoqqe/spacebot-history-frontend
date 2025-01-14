<script setup>
import { ref } from "vue";
import MenuIcon from "@/components/icons/menu.svg";
import {useCrystalCountStore} from "@/store/crystalCount.js"
import SidebarComponent from "@/components/SidebarComponent.vue";
import CrystalCountComponent from "@/components/CrystalCountComponent.vue";
import ShopSectionComponent from "@/components/ShopSectionComponent.vue";

const isSidebarActive = ref(false);

const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value
}

const store = useCrystalCountStore();

</script>

<template>
  <main>
    <SidebarComponent :toggle-sidebar="toggleSidebar" :is-sidebar-active="isSidebarActive"/>
    <header>
      <img :src="MenuIcon" alt=""
           class="menu-icon" @click="toggleSidebar"
           v-if="!isSidebarActive">
      <h1>Магазин</h1>
      <CrystalCountComponent size="medium" :count="store.crystalCount"/>
    </header>
    <article>
      <ShopSectionComponent/>
      <ShopSectionComponent/>
    </article>
  </main>
</template>

<style scoped lang="scss">
@use "../assets/variables.scss";

main {
  height: fit-content;
  margin: 0 auto;
  background-color: var(--default-color);

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    > h1 {
      @include variables.capital-text;
      color: var(--text-color);
      text-shadow: var(--text-shadow);
      font-size: 2rem;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;
  }
}

.menu-icon {
  width: 1.75rem;
  height: 1.75rem;
}
</style>
