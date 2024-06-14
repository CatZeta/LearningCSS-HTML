<template>
  <div class="card card-4">
    <div class="card-header">
      <h3>Deals in Pc's</h3>
    </div>
    <div class="card-body">
      <img :src="articles[0].urlToImage" :alt="articles[0].title"/>
    </div>
    <div class="card-footer">
      <p>Shop now</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['articles']);


</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 15px;
  background-color: white;
  width: 350px;
  height: 420px;
  padding: 20px 0px 15px;
  flex:1;
}
.card-header h3, a {
  margin: 0 10px;
}

.card-header,
.card-footer {
  padding: 0px 0px 10px 10px;
  align-self: flex-start;
}

.card-body img {
  height: 340px;
  width: 303px;
  object-fit: cover;
}

.card-footer p{
  font-size: small;
}

.card-4 .card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 0 20px 0 15px;
}


</style>
