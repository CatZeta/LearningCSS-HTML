<!-- TODO:partir item's e anuncio em componentes e passar a mainGrid para as views com os componentes organizados. -->
<template>
    <div class="container">
        <!--Item 1-->
        <div class="item item-1" v-if="article && article.length > 2">
            <div class="row-1">
                <a href="#">
                    <span v-if="article[0].source_id" class="green-tag">{{ article[0].source_id }}</span>
                    <h3>{{ article[0].title }}</h3>
                    <p>{{ article[0].author }}, {{ article[0].publishedAt.slice(11, 16)}}</p>
                </a>
            </div>
            <div class="row-2">
                <span id="img" :style="{ backgroundImage: `url(${article[1].urlToImage})` }">
                    <i class="material-symbols-outlined">bar_chart</i>
                </span>

            </div>
            <div class="row-3">
                <p>{{ article[1].description }}</p>
                <span class="icons">
                    <a href="#"><i class="material-symbols-outlined">mouse</i></a>
                    <a href="#"><i class="material-symbols-outlined">sms</i></a>
                </span>
            </div>
        </div>

        <!--Item 4-->
        <div class="item item-4">
            <span id="img" :style="{ backgroundImage: `url(${article[2].urlToImage})` }"></span>
            <div class="item-text">
                <h3>{{ article[2].title }}</h3>
                <p>{{ article[2].author }}, {{ article[2].publishedAt.slice(11, 16)}}</p>
            </div>
        </div>

        <!--Item 2-->
        <div class="item item-2">
            <div class="row-1">
                <div id="title">
                    <h3>Últimas</h3>
                    <i class="material-symbols-outlined">arrow_forward</i>
                </div>
            </div>
            <div class="content">
                <div v-for="art in article.slice(3)" :key="article.id" class="content-row">
                    <p>{{ art.publishedAt.slice(11, 16)}}</p>
                    <h3>{{art.title}}</h3>
                </div>
            </div>
            <div class="content-footer">
                <i class="material-symbols-outlined">add</i>
            </div>
        </div>

        <!--Item 3-->
        <div class="item item-3">

            <h3>Mercados</h3>
            <div class="company-box">
                <div v-for="stock in stocks" :key="stock.id" class="company-list">
                    <div class="company-item">
                        <span>{{ stock.company }}</span>
                        <div class="percentage-box" :class="getPercentageClass(stock.percentage)">
                            <span :class="getIconClass(stock.percentage)"></span>
                            <span> {{ Math.abs(stock.percentage) }}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Anuncio-->
        <div class="anuncio">
            <span class="anuncio-box">
                <h6>anuncio</h6>
                <p>Procura-se passeador de cães part-time</p>
            </span>
        </div>
    </div>
</template>

<script setup>
    import useStocks from '@/composables/useStocks';
   
    const props = defineProps({
        article: {
            type: Array,
            required: true
        }
    });
    
    const { stocks } = useStocks();

    function getIconClass(percentage) {
        return percentage > 0 ? 'fas fa-thin fa-arrow-up' : 'fa fa-arrow-down';
    }

    function getPercentageClass(percentage) {
        return percentage > 0 ? 'box-green' : 'box-red';
    }

   

    console.log('MainGrid prop result:', props.article)
</script>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
        grid-template-rows: minmax(0, auto);
        gap: 10px 10px; /*first value rows, 2nd value  col*/
        margin: 3% 15%;
    }

    .item {
        background-color: white;
        border-radius: 3px;
        cursor: pointer;
    }

    .item p {
        font-size: 12px;
        color: #8c8a8a;
    }

    .item-1 .row-1 {
        display: flex;
        align-items: center;
        padding: 10px 10px;
    }

    .item-1 .row-1 h3,
    p {
        padding: 10px 0;
        text-decoration: none;
    }

    .item-1:hover h3 {
        color: rgb(3, 173, 3);
    }

    .item-1 .row-2 {
        overflow: hidden;
        display: block;
        position: relative;/* Make .row-2 a positioning context */
        max-width: 100%;
        height: auto;/* maintain aspect ratio */
    }

    .item-1 .row-2 #img {
        width: 100%;
        height: 250px;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }


    .item-1 .row-2 i {
        display: flex;
        background-color: rgba(108, 238, 8, 0.541);
        color: #f7f3f3;
        position: absolute;
        border-radius: 50%;
        z-index: 1;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        bottom: 20px;/* from the bottom */
        left: 20px;/* from the left */
        font-size: 20px;
    }

    .item-1 .row-3 p {
        font-size: 16px;
        color: #333;
        padding: 10px;
    }

    .item-1 .row-3 i {
        color: rgb(98, 221, 3);
        padding: 10px;
    }

    .item-1 .row-3 i:hover {
        color: rgba(97, 211, 3, 0.525);
    }

    .item-2 {
        grid-column: 2 / 3;
        grid-row: 1 / -4;/* Span the entire height */
        display: grid;
        grid-template-columns: 1fr;/* Uma coluna */
        grid-template-rows: auto 1fr; /* Primeira linha com altura automática, segunda linha com restante */
        min-width: 255px;
    }

    .item-2 .row-1 {
        padding: 5px;
    }

    .item-2 .row-1 #title {
        display: flex;
        align-items: center;/* Alinha os itens verticalmente */
        justify-content: center;/* Centraliza horizontalmente */
        padding: 5px;
        border-bottom: 1px solid #ddd;
    }
    .content-row p {
        padding: 10px 0px 2px 0px;
    }

    .content-row h3 {
        font-weight: 500;
    }

    .item-2 .row-1 i {
        border: 2px solid rgb(7, 226, 29);
        border-radius: 50%;
        color: rgb(7, 226, 29);
        margin-left: 10px;
    }

    .item-2 .content {

        overflow-y: scroll;
        max-height: 600px;
        color: #00af00;
    }

    .item-2 .content .content-row {
        padding: 15px;
    }

    .item-2 .content::-webkit-scrollbar {
        width: 5px;
    }

    .item-2 .content::-webkit-scrollbar-thumb {
        background-color: rgba(134, 133, 133, 0.5);
        border-radius: 6px;
    }

    .item-2 .content::-webkit-scrollbar-thumb:hover {
        background-color: rgba(128, 128, 128, 0.514);
    }

    .item-2 .content-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-top: 2px solid #ddd;
    }

    .item-2 .content-footer i {
        border: 2px solid rgb(7, 226, 29);
        border-radius: 50%;
        color: rgb(7, 226, 29);
    }

    .item-4 {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
    }

    .item-4 #img {
        width: 80%;
        height: 180px;
        object-fit: cover;
        border-radius: 10px 0 0 10px;
    }

    .item-4 .item-text {
        justify-content: flex-start;
        padding: 15px 0 0 10px;
    }

    .item-4 h3 {
        font-size: 18px;
    }

    .item-3 {
        grid-column: 3 / 4;
        grid-row: -2/-4;
        background-color: white;
        padding: 10px;
        margin-top: auto;
    }

    .item-3 h3 {
        border-bottom: 2px solid #ddd;
        color: #00d700;
        max-height: 60px;
        padding: 10px;
    }

    /* company list */
    .company-list {
        max-height: 100%;
    }

    .company-item {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border-bottom: 1px solid #ddd;
    }

    .company-box {
        max-height: 300px;
        overflow-y: scroll;
    }

    .percentage-box {
        display: flex;
        padding: 0 5px;
        border-radius: 5px;
        width: 80px;
        height: 25px;
        font-size: 12px;
        justify-content: space-around;
        align-items: center;
        color: white;
    }
    .box-green {
        background-color: #00af00;
    }

    .box-red {
        background-color: #e10000;
    }

    /* anuncio */
    .anuncio {
        grid-column: 3 / 4;
        grid-row: -4/-3;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .anuncio-box {
        display: flex;
        justify-content: center;
        position: relative;
        background-image: url('../assets/quimi.jpg');
        width: 300px;
        height: 300px;
        margin: 10px;
        background-size: cover;
        background-position: center;
    }

    .anuncio-box h6 {
        color: #333;
        background-color: #ddd;
        height: 15px;
        width: 100px;
    }

    .anuncio-box p {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        margin: 0;
        padding: 10px;
        background: rgba(0, 0, 0, 0.5);/* Fundo semitransparente para melhor legibilidade */
        
        color: white;
        text-align: center;
        font-size: 14px;
    }

    .anuncio-box p {
        width: 100%;/* Fazer o parágrafo ocupar toda a largura da imagem */
        margin: 0;
        padding: 10px;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        text-align: center;
        font-size: 14px;
    }
</style>