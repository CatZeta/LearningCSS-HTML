<template>
    <div class="card card-4">
        <div class="card-header">
            <h3>Deals in Pc's</h3>
        </div>
        <div class="card-body">
            <img src="#" alt="">
        </div>
        <div class="card-footer">
            <a href="#">Shop now</a>
        </div>
    </div>
</template>

<script setup>
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
.card-header h3 {
    margin: 0;
}

.card-header, .card-footer {
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
    height: 100px;
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
}

.card-4 .card-body img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

</style>