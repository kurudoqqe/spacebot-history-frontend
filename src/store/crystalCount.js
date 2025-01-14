import { ref } from "vue";
import { defineStore } from 'pinia'

export const useCrystalCountStore = defineStore('crystalCount', () => {
  const crystalCount = ref(0)
  const isDoubleCrystal = ref(false)

  const increaseCrystalCount = () => {
    if (isDoubleCrystal.value) {
      crystalCount.value = crystalCount.value + 2
    }
    else {
      crystalCount.value++
    }
  }

  const subtractCrystalCount = (value) => {
    if (crystalCount.value >= value) {
      crystalCount.value = crystalCount.value - value
    }
    else return false
  }

  const setDoubleCrystal = () => {
    isDoubleCrystal.value = true
  }

  return {crystalCount, isDoubleCrystal, increaseCrystalCount, subtractCrystalCount, setDoubleCrystal}
})

