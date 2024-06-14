<template>
    <section class="header">
        <div class="header-left">
            <img id="logo" src="@/assets/header/amazon_logo.png" alt="Amazon logo">
            <div id="deliver">
                <span id="location-icon" class="material-symbols-outlined">
                    location_on
                </span>
                <span class="block-text">
                    <p id="deliver-to">Deliver to</p>
                    <strong>Portugal</strong>
                </span>
            </div>
        </div>

        <div class="search-bar">
            <button id="all-filter">All</button>
            <button id="dropdown">&#9662;</button>
            <input type="text" placeholder="Search Amazon">
            <button id="search-icon" class="material-symbols-outlined">
                search
            </button>
        </div>

        <div class="header-right">
            <div class="lang">
                <!--TODO substituir por bandeira dinamica-->
                <img id="lang-flag" src="@/assets/header/flag.png">
                <p>EN</p>
                <span id="dropdown">&#9662;</span>
            </div>

            <div class="sign-in">
                <div>
                    <p>Hello, sign in</p>
                    <strong>Account & Lists</strong>
                </div>
                <span id="dropdown">&#9662;</span>
            </div>

            <div class="orders">
                <div>
                    <p>Retuns</p>
                    <strong>& Orders</strong>
                </div>
                <span id="dropdown">&#9662;</span>
            </div>

            <div class="cart">
                <span class="material-symbols-outlined">
                    shopping_cart
                </span>
                <strong>Cart</strong>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style  scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1a242f;
    color: white;
    font-size: 14px;
    max-height: 60px;
    padding: 5px;
}

.header-left {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 15%
}

.header-left #logo {
    background-image: url('./assets/header/amazon_logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 120px;
    height: 40px;
    justify-self: center;
}

.header-left #deliver {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.header-left #deliver-to {
    font-size: smaller;
    margin: 0;
}


.search-bar {
    display: flex;
    align-items: center;
    width: 60%;
    margin: 0 10px;
}

.search-bar button {
    padding: 5px 10px;
    height: 34px;
    border: none;
    cursor: pointer;
}

.search-bar input {
    width: 100%;
    height: 30px;
    padding: 7px 10x 10px 0;
}

.search-bar #all-filter {
    max-width: 30px;
    background-color: rgb(209, 208, 208);
    cursor: pointer;
    border-radius: 5px 0 0 5px;
    color: rgba(7, 7, 7, 0.516);
}

.search-bar #dropdown {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(209, 208, 208);
    color: rgba(7, 7, 7, 0.516);
    cursor: pointer;
    max-width: 2px;
    font-size: 20px;
}

.search-bar #search-icon {
    background-color: #febd69;
    border-radius: 0 5px 5px 0;
}


.header-right {
    display: flex;
    justify-content: space-around;
    width: 25%;
    height: 50px;
}

.header-right p {
    margin: 0;
    font-size: 12px; /* Adjust font size as needed */
    white-space: nowrap; /* Prevent text wrapping */
    overflow: hidden; /* Hide overflowing text */
    text-overflow: ellipsis; /* Show ellipsis (...) if text overflows */
  }
  

.lang,
.sign-in,
.orders,
.cart {
    display: flex;
    cursor: pointer;
    justify-self: center;
    align-items: center;
    /*border: 1px solid white; */
}

.header-right #lang-flag {
    background-image: url('./assets/header/flag.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 30px;
    height: 15px;
    margin: 5px;
}

.header-right #dropdown {
    font-size: 15px;
    align-content: baseline;
    align-self: last baseline;
}

.header-right .lang #dropdown{
    height: 25px; /*Alinha dropdown na posição certa*/
}

.cart span {
    font-size: 35px;
}

.cart strong {
    height: 3px;
}
</style>