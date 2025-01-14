import { ref } from "vue";
import { defineStore } from 'pinia'
import router from "@/router/routes.js";

export const useStageStore = defineStore('currentRocketStage', () => {
  const currentRocketStage = ref(0)

  const upgradeRocket = () => {
    if (currentRocketStage.value < 5) {
      currentRocketStage.value++
    }
    if (currentRocketStage.value === 5) {
      router.push({name: 'Surface'})
    }
  }

  return {currentRocketStage, upgradeRocket}
})
