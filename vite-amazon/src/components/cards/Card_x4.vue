<template>
  <div class="card">
    <div class="card-header">
      <h3>Gaming accessories</h3>
    </div>
    <div class="card-body">
      <!--Item 1-->
      <div class="item">
        <img :src="articles[11].urlToImage" :alt="articles[11].title" />
        <p>Headsets</p>
      </div>
      <!--Item 2-->
      <div class="item">
        <img :src="articles[12].urlToImage" :alt="articles[12].title" />
        <p>Keyboard</p>
      </div>
      <!--Item 3-->
      <div class="item">
        <img :src="articles[13].urlToImage" :alt="articles[13].title" />
        <p>Computer mice</p>
      </div>

      <!--Item 4-->
      <div class="item">
        <img :src="articles[14].urlToImage" :alt="articles[14].title" />
        <p>Chairs</p>
      </div>
      <div class="card-footer">
        <p>See more</p>
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
    max-height: 420px;
    padding: 20px 0px 15px;
  }

  .item {
    overflow: hidden;
    object-fit: cover;
  }

  .card-header h3 {
    margin: 0 10px;
  }

  .card-header {
    padding: 0px 0px 10px 10px;
    align-self: flex-start;
  }

  .card-body {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    font-size: small;
    padding: 0px 20px 10px;
  }

  .card-body img {
    height: 116px;
    width: 185px;
  }

  .card-footer {
    font-size: small;
    text-decoration: none;
    align-self: baseline;
    }
</style>
