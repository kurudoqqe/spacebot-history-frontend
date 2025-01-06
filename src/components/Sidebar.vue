<script setup>
import CloseIcon from "@/components/icons/close.svg"
import router from "@/router/routes.js";

defineProps({
  toggleSidebar: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <div class="sidebar">
    <aside>
      <div class="capital">
        <img :src="CloseIcon" alt=""
             @click="toggleSidebar"
        >
        <h1>МЕНЮ</h1>
      </div>
      <nav>
        <a @click="router.push({name: 'home'})">Луна</a>
        <a @click="router.push('/')">Магазин</a>
        <a @click="router.push('/')">Космос</a>
      </nav>
      <p>Версия 1.0</p>
    </aside>
    <div class="shadow" @click="toggleSidebar">

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";
.sidebar {
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  aside {
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
    width: 60%;
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

      > a {
        @include variables.capital-text;
        color: var(--text-color);
        text-shadow: var(--text-shadow);
        font-size: 1.5rem;
        text-decoration: underline;
        text-underline-offset: .25rem;
      }
    }

    > p {
      @include variables.default-text;
      color: var(--text-color);
      font-size: 1.25rem;
    }
  }

  .shadow {
    background-color: rgba(0, 0, 0, 0.75);
    width: 40%;
    height: 100%;
  }
}



</style>
