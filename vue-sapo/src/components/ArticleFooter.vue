<template>
    <div class="cover-footer">
        <span>Noticia 1</span>
        <span>Noticia 2</span>
        <span>Noticia 3</span>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .cover-footer {
        display: flex;
        background-color: rgba(51, 51, 51, 0.5);
        color: white;
        justify-content: center;
        padding: 1rem;
        width: 100%;
        position: absolute;
        bottom: 0;
        backdrop-filter: blur(5px);
    }

    .cover-footer span {
        border: 1px solid black;
        background-color: #333;
        margin-right: 2px;
        min-height: 100px;
        min-width: 250px;
        padding: 10px;
        text-align: center;
    }
</style>