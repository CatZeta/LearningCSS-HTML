<template>
    <header>
        <div id="left-menu">
            <a href="#"><strong>MENU</strong></a> |
            <a href="#">MAIL </a>
            <a href="#"> CAPAS DE JORNAIS</a>
        </div>
        <div id="logo-sapo">
            <img src="../assets/sapo.png" alt="sapo logo">
            <p>SAPO</p>
        </div>
    </header>

    <nav class="nav">
        <div class="left-search">
            <a href="#"><i class="material-symbols-outlined">menu</i></a>
            <a href="#"><i class="material-symbols-outlined">search</i></a>
        </div>
        <div id="logo-eco">
            <img src="../assets/eco.png" alt="sapo logo">
        </div>
        <div class="right-menu">
            <a href="#">Entrar</a>
            <button class="btn">Assinatura premium</button>
        </div>
    </nav>

    <nav class="nav-links">
        <a href="#">Últimas</a>
        <a href="#">Mercados</a>
        <a href="#">Opinião</a>
        <a href="#">Advocatus</a>
        <a href="#">Trabalho</a>
        <a href="#">ECOseguros</a>
        <a href="#">Capital Verde</a>
        <a href="#">Fundos Europeus</a>
        <a href="#">Local Online</a>
        <a href="#">+M</a>
        <a href="#">Loja</a>
    </nav>
</template>

<script setup>

</script>

<style scoped>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #212020;
        color: white;
        padding: 12px 49px;
        position: relative;
        font-size: 13px;
        font-weight: 400;
    }

    #left-menu {
        position: absolute;
        left: 3rem;
    }

    #left-menu a {
        text-decoration: none;
        color: #ddd;
    }

    #left-menu a:hover {
        color: green;
    }

    #logo-sapo {
        display: flex;
        align-items: baseline;
        font-size: 32px;
        font-weight: 600;
        justify-content: center;
        flex: 1;
        line-height: 13px;
    }

    #logo-sapo img {
        height: 35px;
        vertical-align: bottom;
        padding-right: 5px;
    }

    /* Navigation */
    .nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #01af01;
        padding: 0.5rem 1rem;
        min-height: 65px;
        color: white;
        position: sticky;
        top: 0;  /* Stick to the top of the viewport */
        z-index: 1000; /* Ensure it stays above other content */
    }

    .left-search,
    .right-menu {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .left-search i {
        padding: 0 10px;
        font-weight: 200;
    }

    #logo-eco {
        font-size: 1.5rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
        flex: 1;
    }

    #logo-eco img {
        height: 60px;
        vertical-align: bottom;
    }

    .nav-links {
        display: flex;
        height: 28px;
        gap: 1rem;
        background-color: #019601;
        border-top: 1px solid rgba(0, 0, 0, 0.064);
        justify-content: center;
        align-items: center;
        padding: 0 20%;
        font-size: 14px;
        font-weight: 500;
        position: sticky;
        top: 75px;/* Stick to the top of the viewport under the nav */
        z-index: 999;
    }

    .nav-links a {
        color: rgb(255, 255, 255);
        text-decoration: none;
        padding: 0.5rem;
        white-space: nowrap;
    }

    .nav-links a:hover {
        color: #01d600;
    }

    .right-menu a {
        margin-right: 1rem;
        text-decoration: none;
        color: white;
    }

    .right-menu a:hover {
        color: #01d600;
    }

    .btn {
        padding: 0.5rem 1rem;
        background-color: #f7f3f3;
        color: green;
        border: none;
        cursor: pointer;
        border-radius: 20px;
    }

    .btn:hover {
        background-color: #01af01;
        color: white;
    }

    .left-search i {
        font-size: 24px;
        color: white;
    }
</style>