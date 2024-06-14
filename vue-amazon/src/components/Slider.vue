<template>
    <section class="slider">
        <div class="slider-header">
            <h3>Popular products in Wireless internationally</h3>
        </div>
        <div class="content">
            <button class="nav-btn prev-btn">&#10094;</button>
            <div class="slider-item"><img src="#" alt=""></div>
            <div class="slider-item"><img src="#" alt=""></div>
            <div class="slider-item"><img src="#" alt=""></div>
            <div class="slider-item"><img src="#" alt=""></div>
            <div class="slider-item"><img src="#" alt=""></div>
            <div class="slider-item"><img src="#" alt=""></div>
            <div class="slider-item"><img src="#" alt=""></div>
            <div class="slider-item"></div><img src="#" alt="">
            <button class="nav-btn next-btn">&#10095;</button>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.slider {
    display: grid;
    justify-items: left;
    grid-template-rows: 1fr;
    flex: 1;
    margin: 2%;
    overflow-x: auto;
    background-color: white;
    border: 10px solid white;

    scrollbar-width: thin; /* Para navegadores modernos, ajusta a largura da barra de rolagem */
    scroll-snap-type: x mandatory; /* Alinhamento suave */
    scroll-behavior: smooth; /* Rolagem suave */
}

.slider-header {
    align-items: flex-start;
}

.slider .content {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: auto;
    border-bottom: 0;
    flex: 1;
}

.slider .content img {
    padding: 10px 5px;
}
</style>