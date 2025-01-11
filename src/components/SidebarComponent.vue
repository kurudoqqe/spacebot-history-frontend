<script setup>
import router from "@/router/routes.js";
import CloseIcon from "@/components/icons/close.svg"
import MoonIcon from "@/components/icons/moon.png"
import PickaxeIcon from "@/components/icons/pickaxe.png"
import StoreIcon from "@/components/icons/store.png"

defineProps({
  isSidebarActive: {
    type: Boolean,
    required: true
  },
  toggleSidebar: {
    type: Function,
    required: true
  }
})
</script>

<template>

  <Transition name="slide">
    <aside v-if="isSidebarActive">
      <div class="capital">
        <img :src="CloseIcon" alt=""
             @click="toggleSidebar"
        >
        <h1>МЕНЮ</h1>
      </div>
      <nav>
        <div @click="router.push({name: 'Surface'})">
          <img :src="MoonIcon" alt="">
          <a>Поверхность</a>
        </div>
        <div @click="router.push({name: 'Mine'})">
          <img :src="PickaxeIcon" alt="">
          <a>Шахта</a>
        </div>
        <div @click="router.push({name: 'Shop'})">
          <img :src="StoreIcon" alt="">
          <a>Магазин</a>
        </div>
      </nav>
      <p>Версия 1.0</p>
    </aside>
  </Transition>
  <Transition name="fade">
    <div class="shadow" @click="toggleSidebar" v-if="isSidebarActive"/>
  </Transition>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";
aside {
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  position: absolute;
  left: 0;
  width: 65%;
  height: 100%;
  background-color: var(--default-color);
  padding: 1.5rem;
  z-index: 2;

  .capital {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    > h1 {
      @include variables.capital-text;
      color: var(--text-color);
      text-shadow: var(--text-shadow);
      font-size: 2rem;
    }

    > img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  > nav {
    display: flex;
    flex-direction: column;
    gap: 2.25rem;

    > div {
      display: flex;
      align-items: center;
      gap: .5rem;

      > a {
        @include variables.capital-text;
        color: var(--text-color);
        text-shadow: var(--text-shadow);
        font-size: 1.25rem;
      }

      > img {
        padding: .25rem;
        width: 2rem;
        height: 2rem;
      }
    }
  }

  > p {
    @include variables.default-text;
    color: var(--text-color);
    font-size: 1.25rem;
  }
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}

.shadow {
  position: absolute;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100vh;
  z-index: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

</style>
