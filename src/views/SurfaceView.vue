<script setup>
import {onMounted, ref} from "vue";
import MenuIcon from "@/components/icons/menu.svg"
import {useStageStore} from "@/store/currentStage.js"
import RocketComponent from "@/components/RocketComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";

const isSidebarActive = ref(false)
const isRocketActive = ref(false)

const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value
}

const stage_store = useStageStore();

onMounted(() => {
  if (stage_store.currentRocketStage === 5) {
    setTimeout(() => {
      isRocketActive.value = true
    })
    setTimeout(() => {
      document.querySelector(".congratulations").classList.add("active")
    }, )
  }
})
</script>

<template>
  <main>
    <div v-if="isRocketActive === false">
      <SidebarComponent :toggle-sidebar="toggleSidebar" :is-sidebar-active="isSidebarActive"/>
      <img :src="MenuIcon" alt=""
           class="menu-icon" @click="toggleSidebar"
           v-if="!isSidebarActive">
    </div>
    <RocketComponent :stage="stage_store.currentRocketStage" :is-active="isRocketActive"/>
    <div v-if="isRocketActive" class="congratulations">
      <h1>Спасибо за игру!</h1>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss";

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

.congratulations {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 15rem;
  padding: 1rem;
  background-color: var(--default-color);
  border-radius: 1rem;
  transform:translate(-50%, 600%);
  transition: transform 1s ease-in-out;

  &.active {
    transform:translate(-50%, -50%);
  }

  > h1 {
    @include variables.capital-text;
    color: var(--text-color);
    text-shadow: var(--text-shadow);
    font-size: 1.5rem;
  }
}
</style>
