<template>
    <div>
        <span :class="">{{ tag }}</span>
    </div>
</template>

<script setup>
//Criar condições consoante data do artigo "publishedAt"
//if (article.publishedAt > from 2024/05/26) 
//      tag.value = 'Exclusivo' - greenTag
//else (article.publishedAt > from 2024/06/01) 
//      tag.value = 'Em atualização' - greenTag

//E assim por diante para todas as tags
//Especificar que tags tem a class green tag ou red tag
</script>

<style scoped>
    /*Usar style das tags no global*/
</style>