<script setup>
import {onMounted} from "vue";
import Pickaxe from "../assets/images/moon/pickaxe.png";
import {useCrystalCountStore} from "@/store/crystalCount.js"
import MoonCrystal from "../assets/images/moon/moon-crystal.png"

const props = defineProps({
  size: {
    type: String,
    required: true,
  },
  clickable: {
    type: Boolean,
    required: true
  },
  farming: {
    type: Boolean,
    required: true
  }
})

const store = useCrystalCountStore()

const enlargeCrystal = (target) => {
  if (props.clickable) {
    target.classList.add("clicked");
    store.IncreaseCrystalCount(1)
    setTimeout(() => {
      target.classList.remove("clicked");
    }, 100)
  }
}

const autoFarmCrystal = () => {
  const pickaxes = document.querySelectorAll(".pickaxe");
  pickaxes.forEach(pickaxe => {
    const farm = () => {
      pickaxe.classList.add("farming");
      store.IncreaseCrystalCount(1)
      setTimeout(() => {
        pickaxe.classList.remove("farming");
      }, 500);
    }

    farm();

    setInterval(() => {

      if (!pickaxe.classList.contains("farming")) {
        farm();
      }
    }, 1000);
  })
}

onMounted(() => {
  if (props.farming) {
    autoFarmCrystal()
  }
})

</script>

<template>
  <div class="crystal-container">
    <img :src="MoonCrystal" alt="" class="moon-crystal"
         :class="props.size" @click="event => {enlargeCrystal(event.target)}">
    <img :src="Pickaxe" alt=""
    class="pickaxe" v-if="farming">
  </div>
</template>

<style scoped>
.crystal-container {
  position: relative;
  z-index: 0;
  .moon-crystal {
    transition: transform 0.1s ease-in-out;
    &.small {
      width: 5.5rem;
      height: 6.5rem;
    }

    &.medium {
      width: 9.5rem;
      height: 12.5rem;
    }

    &.clicked {
      transform: scale(1.2);
    }
  }

  .pickaxe {
    position: absolute;
    top: -7.5%;
    left: -15%;
    width: 3rem;
    height: 3rem;
    transition: transform .15s ease-out;

    &.farming {
      transform: rotateZ(-40deg);
    }
  }
}
</style>
