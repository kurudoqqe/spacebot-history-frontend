import { defineStore } from 'pinia'
import {ref} from "vue";

const useStageStore = defineStore('currentRocketStage', () => {
  const currentRocketStage = ref(0)

  const upgradeRocket = () => {
    currentRocketStage.value++
  }

  return {currentRocketStage, upgradeRocket}
})

export default useStageStore
