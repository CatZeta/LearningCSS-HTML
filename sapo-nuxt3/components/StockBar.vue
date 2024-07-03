<template>
    <div class="action-bar" v-if="stocks">
        <div v-for="stock in stocks" :key="stock.id" class="company">
            <span id="title">{{ stock.company }}</span>

            <span :id="getPercentageClass(stock.percentage)">
                <span id="arrows" :class="getIconClass(stock.percentage)"></span>
                {{ Math.abs(stock.percentage) }}%
            </span>

            <span class="material-symbols-outlined ">
                show_chart
            </span>

            <i :class="getTrendClass(stock.percentage)"></i>
        </div>
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script setup>
    import  useStocks from '~/composables/useStocks.js';

    const { stocks } = useStocks();
    //Verifica a direção da seta (interior da percentage box)
    function getIconClass(percentage) {
        return percentage > 0 ? 'fa fa-arrow-up' : 'fa fa-arrow-down';
    }
    //Verifica o id aplicado, id associado a -gren para positivo e -red para negativo
    function getPercentageClass(percentage) {
        return percentage > 0 ? 'percent-green' : 'percent-red';
    }
    //Verifica a direção do grafico (action bar)
    function getTrendClass(percentage) {
        return percentage > 0 ? 'fa fa-arrow-trend-up' : 'fa fa-arrow-trend-down ';
    }
</script>

<style scoped>
    .action-bar {
        display: flex;
        justify-content: center;
        background-color: #f0ebeb;
        margin: 2%;
        overflow: hidden;
    }

    .company {
        width: 214px;
        height: 37px;  
    }

    .action-bar span {
        font-size: 16px;
        padding-right: 5px;
    }
    
    #arrows {
        font-size: 10px;
        font-weight: 900;
    }

    .company span {
        position: relative;
        z-index: 1;
        
    }

    #title {
        margin-right: 5px;
        padding: 10px;
    }

    #percent-red,
    #percent-green {
        display: flex;
        border-radius: 3px;
        padding: 3px 12px;
        align-items: center;
        margin-right: 10px;
        font-weight: 700;
    }

    #percent-red {
        border: 1.5px solid #e10000;
        color: #e10000;
    }

    #percent-green {
        border: 1px solid #00af00;
        color: #00af00;
    }

    .action-bar .company {
        flex: 0 0 auto;
        padding: 5px 10px;
        font-size: 12px;
        background-color: #f0ebeb;
        border-radius: 30px;
        color: #33333385;
        text-align: center;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        margin-right: 10px;
    }

    
    .company::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #43434334;
        transform: translateX(-100%);
        z-index: 0;
    }

    .company:hover::before {
        animation: slide 1s forwards;
    }

    @keyframes slide {
        0% {
            transform: translateX(-100%);
        }

        100% {
            transform: translateX(0);
        }
    }
</style>
