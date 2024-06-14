<template>
  <div class="grid-2">
    <div class="card card-1">
      <div class="card-header">
        <h3>Amazon Gadget Store</h3>
      </div>
      <div class="card-body">
        <div class="container">
          <!--Item 1-->
          <div class="item-1">
            <img :src="articles[3].urlToImage" :alt="articles[3].title" />
            <p>Smartphones</p>
          </div>
        </div>

        <div class="items-row">
          <!--Item 2-->
          <div class="item-2">
            <img :src="articles[4].urlToImage" :alt="articles[4].title" />
            <p>Tablets</p>
          </div>

          <!--Item 3-->
          <div class="item-3">
            <img :src="articles[5].urlToImage" :alt="articles[5].title" />
            <p>Laptops</p>
          </div>

          <!--Item 4-->
          <div class="item-4">
            <img :src="articles[6].urlToImage" :alt="articles[6].title" />
            <p>TVs</p>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <p>Shop all</p>
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
    width: 350px;
    height: 420px;
    padding: 20px 0px 15px;
    flex: 1;
  }

  .card-header h3 {
    margin: 0 15px;
  }

  .card-header {
    padding: 0px 0px 10px 10px;
    align-self: flex-start;
  }

  .grid-2 .card-1 .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .grid-2 .card-1 .card-body .items-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 303px;
  }

  .grid-2 .card-1 .card-body .items-row img {
    width: 100px;
    height: 60px;
    object-fit: cover;
    overflow: hidden;
    padding: 3px;
  }

  .grid-2 .card-1 .card-body .container img {
    width: 303px;
    object-fit: cover;
    padding: 0 3px;

  }

  .grid-2 .card-1 .card-footer p {
    padding-left: 15px;
  }

  .card-footer {
    font-size: small;
    align-self: baseline;
  }

</style>
