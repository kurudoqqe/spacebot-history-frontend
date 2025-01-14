import { ref } from "vue";
import { defineStore } from 'pinia'

export const usePickaxeStore = defineStore('pickaxeState', () => {
  const isActivePickaxe1 = ref(false)
  const isActivePickaxe2 = ref(false)

  const setPickaxe1 = () => {
    isActivePickaxe1.value = true
  }

  const setPickaxe2 = () => {
    isActivePickaxe2.value = true
  }

  return {isActivePickaxe1, setPickaxe1, isActivePickaxe2, setPickaxe2}
})
