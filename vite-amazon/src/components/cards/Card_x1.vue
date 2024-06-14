<template>
  <div class="grid-2">
    <div class="card card-4">
      <div class="card-header">
        <h3>Top Deal's</h3>
      </div>
      <div class="card-body">
        <img :src="articles[2].urlToImage" :alt="articles[2].title" />
      </div>
      <div class="card-footer">
        <p>Shop now</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['articles']);
</script>

<style scoped>

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px 15px;
    background-color: white;
    max-width: 350px;
    height: 420px;
    padding: 20px 0px 15px;
}
.card-header h3 {
    margin: 0;
}

.card-header, .card-footer {
    padding: 0px 0px 10px 10px;
    align-self: flex-start;
    
}

.card-4 .card-text {
  align-self: flex-start;
}

.card-4 #tag {
  background-color: rgb(235, 51, 51);
  padding: 5px;
  color: white;
  border-radius: 3px;
}

.card-4 strong {
  color: rgb(235, 51, 51);
}

.card-body img {
  height: 340px;
  width: 303px;
  object-fit: cover;
}


.card-footer a {
  font-size: small;
  text-decoration: none;
}

.card-4 .card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 0 20px 0 15px;
}

.card-4 .card-body img {
  width: 100%;
  object-fit: cover;
}

.card-footer p{
  font-size: small;
  padding-left: 5px; 
}

</style>
