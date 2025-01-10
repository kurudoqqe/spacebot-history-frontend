<script setup>
import MoonCrystal from "../assets/images//moon/moon-crystal.png"

const props = defineProps({
  size: {
    type: String,
    required: true,
  }
})

const enlargeCrystal = (target) => {
  target.classList.add("clicked");
  setTimeout(() => {
    target.classList.remove("clicked");
  }, 100)
}
</script>

<template>
  <img :src="MoonCrystal" alt="" :class="props.size"
  @click="event => {enlargeCrystal(event.target)}">
</template>

<style scoped>
img {
  transition: transform 0.1s ease-in-out;
  &.small {
    width: 5.5rem;
    height: 6.5rem;
  }

  &.medium {
    width: 9.5rem;
    height: 12.5rem;
  }

  &.large {
    width: 12.5rem;
    height: 17.5rem;
  }

  &.clicked {
    transform: scale(1.35);
  }
}
</style>
