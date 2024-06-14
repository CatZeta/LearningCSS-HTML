<template>
    <div class="main-box">
        <p id="text">See personalized recommendations</p>
        <button id="btn">Sign in</button>
        <p id="new-customer">New customer? <a href="#">Start here</a></p>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .main-box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid rgba(0, 0, 0, 0.148);
        font-size: small;
        line-height: 1%;
        padding: 20px;
    }

    #btn {
        width: 230px;
        height: 25px;
        background: linear-gradient(to top, #ffc940, #ffc9407b);
        border: 1px solid rgba(250, 210, 0, 0.5);
        color: black;
        border-radius: 5px;
        font-weight: bold;
    }
</style>