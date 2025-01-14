<script setup>
import {ref} from "vue";
import MenuIcon from "@/components/icons/menu.svg";
import {useStageStore} from "@/store/currentStage.js";
import RocketIcon from "@/components/icons/rocket.png";
import {usePickaxeStore} from "@/store/pickaxeState.js";
import UpgradeIcon from "@/components/icons/upgrade.png";
import PickaxeIcon from  "@/components/icons/pickaxe.png";
import {useCrystalCountStore} from "@/store/crystalCount.js";
import SidebarComponent from "@/components/SidebarComponent.vue";
import ShopSectionComponent from "@/components/ShopSectionComponent.vue";
import CrystalCountComponent from "@/components/CrystalCountComponent.vue";

const isSidebarActive = ref(false);

const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value
}

const stage_store = useStageStore();
const crystal_store = useCrystalCountStore();
const pickaxe_store = usePickaxeStore();


</script>

<template>
  <main>
    <SidebarComponent :toggle-sidebar="toggleSidebar" :is-sidebar-active="isSidebarActive"/>
    <header>
      <img :src="MenuIcon" alt=""
           class="menu-icon" @click="toggleSidebar">
      <h1>Магазин</h1>
      <CrystalCountComponent size="medium" :count="crystal_store.crystalCount"/>
    </header>
    <article>
      <div>
        <ShopSectionComponent :price="250" content="Часть ракеты" :icon="RocketIcon"
                              :click="stage_store.upgradeRocket" v-if="stage_store.currentRocketStage === 0"/>
        <ShopSectionComponent :price="500" content="Часть ракеты" :icon="RocketIcon"
                              :click="stage_store.upgradeRocket" v-if="stage_store.currentRocketStage === 1"/>
        <ShopSectionComponent :price="750" content="Часть ракеты" :icon="RocketIcon"
                              :click="stage_store.upgradeRocket" v-if="stage_store.currentRocketStage === 2"/>
        <ShopSectionComponent :price="1000" content="Часть ракеты" :icon="RocketIcon"
                              :click="stage_store.upgradeRocket" v-if="stage_store.currentRocketStage === 3"/>
        <ShopSectionComponent :price="1500" content="Запуск ракеты" :icon="RocketIcon"
                              :click="stage_store.upgradeRocket" v-if="stage_store.currentRocketStage === 4"/>
      </div>
      <div>
        <ShopSectionComponent :price="500" content="Кирка" :icon="PickaxeIcon"
                              :click="pickaxe_store.setPickaxe1" v-if="pickaxe_store.isActivePickaxe1 === false"/>
        <ShopSectionComponent :price="1000" content="Кирка" :icon="PickaxeIcon"
                              :click="pickaxe_store.setPickaxe2"
                              v-if="pickaxe_store.isActivePickaxe2 === false && pickaxe_store.isActivePickaxe1"/>
      </div>
      <div>
        <ShopSectionComponent :price="1000" content="Улучшение добычи" :icon="UpgradeIcon"
                              :click="crystal_store.setDoubleCrystal" v-if="crystal_store.isDoubleCrystal === false"/>
      </div>
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
    padding: 1rem;

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
