import { ref } from "vue";
import { defineStore } from 'pinia'

export const useStageStore = defineStore('currentRocketStage', () => {
  const currentRocketStage = ref(0)

  const upgradeRocket = () => {
    if (currentRocketStage.value < 5) {
      currentRocketStage.value++
    }
  }

  return {currentRocketStage, upgradeRocket}
})
