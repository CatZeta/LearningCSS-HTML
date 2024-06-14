<template>

    <div class="card card-1">
        <div class="card-header">
            <h3>Gaming accessories</h3>
        </div>
        <div class="card-body">

            <!--Item 1-->
            <div class="item-1">
                <img src="#" alt="">
                <p>Headsets</p>
            </div>

            <!--Item 2-->
            <div class="item-2">
                <img src="#" alt="">
                <p>Keyboard</p>
            </div>

            <!--Item 3-->
            <div class="item-3">
                <img src="#" alt="">
                <p>Computer mice</p>
            </div>

            <!--Item 4-->
            <div class="item-4">
                <img src="#" alt="">
                <p>Chairs</p>
            </div>
        </div>
        <div class="card-footer">
            <a href="#">See more</a>
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

</style>