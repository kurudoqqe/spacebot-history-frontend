<script setup>
import RocketComponent from "@/components/RocketComponent.vue";
</script>

<template>
  <main>
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
</style>
