<script setup>
import {ref} from "vue";
import {useCrystalCountStore} from "@/store/crystalCount.js";
import CrystalCountComponent from "@/components/CrystalCountComponent.vue";

const props = defineProps({
  price: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  click: {
    required: true
  }
})

const crystal_store = useCrystalCountStore();

const isNotAvailable = ref(false);

const buyImprovement = () => {
  if (crystal_store.crystalCount >= props.price) {
    crystal_store.subtractCrystalCount(props.price);
    props.click();
  }

  else {
    isNotAvailable.value = true;
    setTimeout(() => {
      isNotAvailable.value = false;
    }, 2000)
  }
}
</script>

<template>
  <section>
    <div class="price-container">
      <p>{{props.content}}</p>
      <button @click="buyImprovement" :class="isNotAvailable ? 'not_available' : ''">
        <CrystalCountComponent size="small" :count="props.price"/>
      </button>
    </div>
    <img :src="props.icon" alt=""/>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/variables.scss";

section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;
  padding-top: 3rem;
  min-height: 5rem;
  border-top: 1px solid var(--text-color);

  .price-container {
    display: flex;
    flex-direction: column;
    width: 8rem;
    gap: .5rem;
    > p {
      @include variables.capital-text;
      color: var(--text-color);
      font-size: 1rem;
    }

    > button {
      display: flex;
      justify-content: center;
      background-color: var(--additional-color);
      padding: .5rem;
      border-radius: .5rem;
      width: 6rem;
      transition: background-color .5s ease-out;

      &.not_available {
        background-color: var(--not-available-color);
      }
    }
  }

  > img {
    width: 4.5rem;
    height: 4.5rem;
  }
}
</style>
