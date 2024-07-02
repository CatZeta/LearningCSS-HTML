<template>
  <!-- Main grid -->
    <div class="inline" v-if="condition === 'main' || condition === 'both'">
        <!-- Main grid Card#1 -->
        <CardBig :article="article[0]" />

        <!-- Main grid Card#2 -->
        <CardSmall :article="article[1]" />
    </div>

    <!-- Secondary grid -->
    <div class="inline" v-if="condition === 'secondary' || condition === 'both'">
        <CardSmall  v-for="(art, index) in article.slice(2, 5)" :key="index" :article="art" />
    </div>
</template>

<script setup>
import CardBig from '@/components/CardBig.vue';
import CardSmall from '@/components/CardSmall.vue';

    const props = defineProps({
        article: {
            type: Array,
            required: true
        },
        condition: {
            type: String,
            required: true,
            validator: (value) => ['main', 'secondary', 'both'].includes(value) //value é referente ao prop
        }
    });


    //console.log('InlineGrid prop result:', props.article);
</script>

<style scoped>
    .inline {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 2% 0;
        cursor: pointer;
    }
</style>