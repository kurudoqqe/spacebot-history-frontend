<script setup>
import MoonPiece from '@/assets/images/moon/moon-piece.png'

const props = defineProps({
  count: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  }
})

const roundCrystalCount = (value) => {
  let str_value = value.toString()
  if (value >= 1000 && value <= 999999) {
    return `${str_value.slice(0, -3)}K`
  }
  if (value >= 100000 && value <= 999999999) {
    return `${str_value.slice(0, -6)}M`
  }
  if (value >= 100000000 && value <= 999999999999) {
    return `${str_value.slice(0, -9)}B`
  }
  if (value >= 100000000000 && value <= 999999999999999) {
    return `${str_value.slice(0, -12)}T`
  }
  else return value
}
</script>

<template>
  <div :class="props.size" class="count-container">
    <img :src="MoonPiece" alt="">
    <h3>{{roundCrystalCount(props.count)}}</h3>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/variables.scss";

.count-container {
  display: flex;
  align-items: center;
  gap: .5rem;
  width: fit-content;
  height: fit-content;

  &.small {
    > img {
      width: 1.25rem;
      height: 2rem;
    }

    > h3 {
      @include variables.default-text;
      color: var(--text-color);
      font-size: 1.25rem;
    }
  }

  &.medium {
    > img {
      width: 2rem;
      height: 3rem;
    }

    > h3 {
      @include variables.default-text;
      color: var(--text-color);
      font-size: 1.75rem;
    }
  }

  &.large {
    > img {
      width: 4rem;
      height: 5rem;
    }

    > h3 {
      @include variables.default-text;
      color: var(--text-color);
      font-size: 4rem;
    }
  }
}
</style>
