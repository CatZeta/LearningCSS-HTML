<template>
    <div>
        <div class="card">
                <img id="img-card" :src="article.urlToImage" :alt="article.title">
                <div class="article-text">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.author }}, {{ article.publishedAt.slice(11, 16)  }}</p>
                </div>
                <div class="icons">
                    <a href="#"><i class="material-symbols-outlined">mouse</i></a>
                    <a href="#"><i class="material-symbols-outlined">sms</i></a>
                </div>
            
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        article: {
            type: Object,
            required: true
        }
    });
</script>

<style scoped>
    .card {
        width: 380px; /* Largura fixa para todos os cards */
        height: 405px; /* Altura fixa para todos os cards */
        cursor: pointer; 
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0;
        flex: 1;
    }

    .article-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
    }

    #img-card {
        width: 100%;
        height: 190px; /* Altura fixa para a imagem */
        object-fit: cover; /* Garante que a imagem cubra totalmente a área definida */
        border-radius: 5px 5px 0px 0;
    }

    .article-text h3,
    p {
        margin: 5px 0;
    }

    .article-text p {
        color: #555;
    }

    .material-symbols-outlined {
        margin-top: 20px;
        padding: 0px 30px 0px 0px;
        font-size: 24px;
        cursor: pointer;
        color: rgb(3, 198, 22);
    }

    .material-symbols-outlined:hover {
        color: rgba(3, 204, 23, 0.368);
    }

    .card:hover h3 {
        color: #01d600;
    }
</style>

