<template>
    <div class="cover" :style="{ backgroundImage: `url(${article.urlToImage})` }">
        <div class="content" >
            <span v-if="article.tag" class="red-tag">{{ article.tag }}</span>
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    article: {
      type: Object,
      required: true
    }
  });

</script>
<style scoped>
    .cover {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 70vh;
        width: 100%;
        background-size: cover;
        background-position: center;
        position: relative;
        padding: 1rem;
        text-align: left;
    }

    .cover:hover h1 {
        color: #01d600;
    }

    .cover h1 {
        font-size: 56px;
        font-weight: 600;
    }

    .content {
        margin: 0 auto;
        color: white;
    }
</style>
