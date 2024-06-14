<template>
    <!-- substituit nav por div(css) -->
    <nav>
        <ul>
            <li><a href="#"><span id="menu-icon" class="material-symbols-outlined">
                        menu
                    </span> All</a></li>
            <li><a href="#">Today's Deals</a></li>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Registry</a></li>
            <li><a href="#">Sell</a></li>
        </ul>
    </nav>
</template>

<script setup>

</script>

<style scoped>
nav {
    display: flex;
    background-color: #222f3c;
    max-height: 40px;
    justify-content: left;
    align-items: center;
    padding-left: 10px;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 0;
    margin: 0;
}

nav ul li {
    display: flex;
    align-items: center;
    padding: 5px 10px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
}

nav #menu-icon {
    margin-right: 5px;
}

main {
    padding: 0 1%;
}
</style>