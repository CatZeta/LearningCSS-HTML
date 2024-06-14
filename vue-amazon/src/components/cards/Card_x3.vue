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
                        <img src="#" alt="">
                        <p>Smartphones</p>
                    </div>
                </div>

                <div class="items-row">
                    <!--Item 2-->
                    <div class="item-2">
                        <img src="#" alt="">
                        <p>Tablets</p>
                    </div>

                    <!--Item 3-->
                    <div class="item-3">
                        <img src="#" alt="">
                        <p>Laptops</p>
                    </div>

                    <!--Item 4-->
                    <div class="item-4">
                        <img src="#" alt="">
                        <p>TVs</p>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <a href="#">Shop all</a>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.grid-2 .card-1 .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
}
.grid-2 .card-1 .card-body .items-row {
   display: flex;
}
.grid-2 .card-1 .card-body .items-row img {
    width: 100px;
    object-fit: cover;
    padding: 0 3px;
}

.grid-2 .card-1 .card-body .container img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.grid-2 .card-1 .card-body p {
    padding: 0 3px;
}
</style>