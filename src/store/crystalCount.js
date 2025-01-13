import { ref } from "vue";
import { defineStore } from 'pinia'

export const useCrystalCountStore = defineStore('crystalCount', () => {
  const crystalCount = ref(0)

  const IncreaseCrystalCount = (value) => {
    crystalCount.value = crystalCount.value + value
  }

  const SubtractCrystalCount = (value) => {
    if (crystalCount.value >= value) {
      crystalCount.value = crystalCount.value - value
    }
    else return false
  }

  return {crystalCount, IncreaseCrystalCount, SubtractCrystalCount}
})

