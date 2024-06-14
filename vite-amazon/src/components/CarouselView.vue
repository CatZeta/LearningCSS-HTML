<template>
          <!--carousel-->
          <section class="background-carousel">

<input type="radio" name="images" id="i1" checked>
<input type="radio" name="images" id="i2">
<input type="radio" name="images" id="i3">

<!--Img_1-->
<div class="carousel-img" id="one">

  <img :src="articles[0].urlToImage" :alt="articles[0].title"/>

    <label for="i3" class="pre"><span class="material-symbols-outlined">
            arrow_back_ios
        </span></label>
    <label for="i2" class="nxt"><span class="material-symbols-outlined">
            arrow_forward_ios
        </span></label>

</div>

<!--Img_2-->
<div class="carousel-img" id="two">

  <img :src="articles[1].urlToImage" :alt="articles[1].title"/>
    <label for="i1" class="pre"><span class="material-symbols-outlined">
            arrow_back_ios
        </span></label>
    <label for="i3" class="nxt"><span class="material-symbols-outlined">
            arrow_forward_ios
        </span></label>

</div>

<!--Img_3-->
<div class="carousel-img" id="three">

  <img :src="articles[2].urlToImage" :alt="articles[2].title"/>

    <label for="i2" class="pre"><span class="material-symbols-outlined">
            arrow_back_ios
        </span></label>
    <label for="i1" class="nxt"><span class="material-symbols-outlined">
            arrow_forward_ios
        </span></label>

</div>
</section>
</template>

<script setup>
const props = defineProps(['articles']);
console.log('CarouselView prop result:', props.articles);
</script>

<style scoped>
/*carousel*/
.background-carousel {
    position: relative;
    width: 100%;
    height: 600px;
    background-size: contain;
    margin-bottom: 10px;
    overflow: hidden;
}

.carousel-img {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: transform 0.3s ease-in-out;
    /* transform: translateX(100%); */
}


/* Aplicar um gradiente de opacidade nos 20% inferiores das imagens */
.carousel-img::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(226, 225, 225) 100%);
    pointer-events: none;
}

.carousel-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#i1, #i2, #i3 {
    display: none; /*So the radio buttons don't show*/
}

.pre, .nxt {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12%;
    height: 50%;
    position: absolute;
    top: 0;
    z-index: 100;
    cursor: pointer;
}  

.carousel-img span {
    font-size: 62px;
    color: rgb(48, 48, 48);
}

.pre {
    left: 0;
}

.nxt {
    right: 0;
}

#i1:checked ~ #one,
#i2:checked ~ #two,
#i3:checked ~ #three {
    z-index: 9;
    opacity: 1;
    /* transform: translateX(0); */
}
</style>