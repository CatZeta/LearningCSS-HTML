<template>
  <!-- 4Cards -->
  <div class="inline-grid" >
    <component v-for="(card, index) in computedCards" :key="index" :is="card" :articles="articles"/>
  </div>
</template>

<script setup>
  import { computed, defineProps } from 'vue'
  import Card_topDeal from '../components/cards/Card_topDeal.vue'
  import Card_x4 from '../components/cards/Card_x4.vue'
  import Card_x3 from '../components/cards/Card_x3.vue'
  import Card_x1 from '../components/cards/Card_x1.vue'
  import Card_x4_bg from '../components/cards/Card_x4_bg.vue'

  const props = defineProps({
    cardOrder: {
      type: Array,
      required: true
    },
    articles: {
      type: Array,
      required: true
    }
  })

  const cardComponents = {
    topDeal: Card_topDeal,
    x4: Card_x4,
    x3: Card_x3,
    x1: Card_x1,
    x4_bg: Card_x4_bg
  }

  // Returns an array of card components based on the cardOrder prop
  const computedCards = computed(() => {
    return props.cardOrder.map((card) => cardComponents[card] || null)
  })
</script>

<style scoped>
  .inline-grid {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 2%;
    flex: 1;
  }
</style>
