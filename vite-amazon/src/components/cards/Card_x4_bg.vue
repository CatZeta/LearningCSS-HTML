<template>
  <div class="card ">
    <div class="card-header">
      <h3>Refresh your space</h3>
    </div>
    <div class="card-body">
      <!--Item 1-->
      <div class="item">
        <img :src="articles[7].urlToImage" :alt="articles[7].title" />
        <p>Dinning</p>
      </div>

      <!--Item 2-->
      <div class="item">
        <img :src="articles[8].urlToImage" :alt="articles[8].title" />
        <p>Home</p>
      </div>

      <!--Item 3-->
      <div class="item">
        <img :src="articles[9].urlToImage" :alt="articles[9].title" />
        <p>Kitchen</p>
      </div>

      <!--Item 4-->
      <div class="item">
        <img :src="articles[10].urlToImage" :alt="articles[10].title" />
        <p>Health</p>
      </div>
    </div>
    <div class="card-footer">
      <p>See more</p>
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
  }

  .card-header h3 {
    margin: 0;
    padding-left: 10px;
  }

  .card-footer p {
    padding-left: 10px;
  }

  .card-footer {
    font-size: small;
    align-self: baseline;
  }

  .card-header,
  .card-footer {
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

</style>
