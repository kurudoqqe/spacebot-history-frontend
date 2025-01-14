<script setup>
import RocketStage1 from "@/assets/images/rocket-stages/stage-1.png";
import RocketStage2 from "@/assets/images/rocket-stages/stage-2.png";
import RocketStage3 from "@/assets/images/rocket-stages/stage-3.png";
import RocketStage4 from "@/assets/images/rocket-stages/stage-4.png";
import StageStart from "@/assets/images/rocket-stages/stage-start.png"

const props = defineProps({
  stage: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  }
})

const checkRocketStage = () => {
  switch (props.stage) {
    case 0: return null
    case 1: return RocketStage1;
    case 2: return RocketStage2;
    case 3: return RocketStage3;
    case 4: return RocketStage4;
    case 5: return StageStart;

    default: return RocketStage1;
  }
}
</script>

<template>
  <div class="rocket" :class="props.isActive ? 'active' : ''">
    <img :src="checkRocketStage()" alt=""
         v-if="props.stage !== 0"/>
  </div>
</template>

<style scoped>
.rocket {
  position: absolute;
  top: 60%;
  left: 50%;
  transform:translate(-50%, -50%);
  transition: transform 8s ease-out;
  z-index: 0;
  img {
    width: 14rem;
    height: 14rem;
  }

  &.active {
    transform: translate(-50%, -300%);
  }
}
</style>
