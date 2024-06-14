<template>
    <div class="live-box">
        <div class="first-content">
            <div class="right-content">
                <div class="live-btn">
                    <span class=" blink-btn"></span>
                    <p>Em Direto</p>
                </div>
            </div>
            <div class="center-content" v-if="article && article.length > 0">
                <h2>{{ article[0].title }}</h2>
            </div>
            <div class="left-content">
                <i class="material-symbols-outlined arrow-icon">arrow_forward</i>
            </div>
        </div>
        <div class="news">
            <div class="news-item" v-for="art in article.slice(1, 4)" :key="art.id">
                <span class="material-symbols-outlined clock-icon">
                    nest_clock_farsight_analog
                </span>
                <h4 class="news-text">{{ art.title }}</h4>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        article: {
            type: Array,
            required: true
        }
    })
</script>

<style scoped>
    .live-box {
        display: flex;
        flex-direction: column;
        background: white;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin: 3% 15%;
    }

    .first-content {
        display: flex;
        max-width: 100p;
        justify-content: space-between;
        height: 80px;
    }


    .right-content {
        display: flex;
        align-items: center;
        flex-direction: row;
        color: white;
        padding: 0 40px 0 0px;
        border-bottom: 1px solid rgba(128, 128, 128, 0.305);
        margin-left: 20px;
    }

    .live-btn {
        display: flex;
        background-color: #cf2e2e;
        padding: 5px;
        border-radius: 5px;
    }

    .center-content {
        display: flex;
        color: #00af00;
        align-items: center;
        justify-content: flex-start;

        margin-right: 20px;
        flex: 1;
        border-bottom: 1px solid rgba(128, 128, 128, 0.305);
    }

    .left-content {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background: #00af00;
        color: white;
        width: 15%;
        clip-path: polygon(46% 0, 100% 0%, 100% 100%, 8% 100%);
        /* vai recortar, neste caso, o background*/
        padding-right: 10px;
    }

    .arrow-icon {
        border: 2px solid white;
        border-radius: 50%;
        justify-content: center;
    }

    .news {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        overflow: hidden;
        justify-content: center;
        margin: 8px;
        height: 70px;
    }

    .news-item {
        display: inline-flex;
        padding: 0 5px;
    }

    .clock-icon {
        display: flex;
        justify-content: right;
        padding: 5px;
        color: rgba(0, 0, 0, 0.275);
    }

    @keyframes blink {

        0%,
        100% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }
    }

    .blink-btn {
        border-radius: 50%;
        border: 2px solid white;
        width: 15px;
        height: 15px;
        background-color: white;
        animation: blink 2s infinite;
        margin: 5px;
    }


</style>