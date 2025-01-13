import { ref } from "vue";
import { defineStore } from 'pinia'

export const useStageStore = defineStore('currentRocketStage', () => {
  const currentRocketStage = ref(0)

  const upgradeRocket = () => {
    currentRocketStage.value++
  }

  return {currentRocketStage, upgradeRocket}
})
