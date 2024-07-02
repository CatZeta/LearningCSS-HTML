<template>
    <div>
        <div class="card">
            <img id="img-card1" :src="article.urlToImage" :alt="article.title">
            <div class="info-card1">
                <div class="article-text">
                    <h3> {{ article.title }}</h3>
                    <h4>{{ article.author }}, {{ article.publishedAt.slice(11, 16) }}</h4>
                    <p>{{ article.description }}</p>
                </div>
                <div class="card-footer">
                    <div class="icons">
                        <a href="#"><i class="material-symbols-outlined">mouse</i></a>
                        <a href="#"><i class="material-symbols-outlined">sms</i></a>
                    </div>
                    <span v-if="article.source.id" class="tag green-tag">
                        {{ article.source.id }}
                    </span>
                </div>
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
        width: 760px;
        display: flex;
        flex-direction: row;
        text-align: left;
        height: 405px;
        border-radius: 5px;
        color: #333;
        background-color: white;
    }

    .info-card1 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px 5px;
    }

    #img-card1 {
        width: 50%;
        height: 100%;
        object-fit: cover;
        flex-shrink: 0;
        border-radius: 5px 0 0 5px;
        margin-right: 10px;
    }

    .article-text {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .article-text h3,
    p,
    h4 {
        padding: 5px 0;
    }

    .article-text h4 {
        font-size: 13px;
        color: #3333333b;
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

    .card-footer {
        display: flex;
        justify-content: space-between;
    }

    .tag {
        margin: 10px;
        align-self: baseline;
    }
</style>
