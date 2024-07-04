<template>
    <div>
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-column footer-newsletter">
                    <div class="primary">
                        <h3>Newsletters</h3>
                        <p>Receba gratuitamente informação económica de referência</p>
                        <div class="btn-footer">
                            <span class="material-symbols-outlined btn-icon">
                                drafts
                            </span>
                            <p>Subscrever</p>
                        </div>
                    </div>
                    <div class="footer-social">
                        <div class="title">
                            <h3>Siga-nos</h3>
                        </div>
                        <div class="social-icons">
                            <span>Tw</span>
                            <span>Ins</span>
                            <span>In</span>
                            <span>f</span>
                        </div>
                    </div>
                </div>
                <div class="footer-column">
                    <h3>Explorar</h3>
                    <ul>
                        <li><a href="#">ECO News</a></li>
                        <li><a href="#">Empresas</a></li>
                        <li><a href="#">Personalidades</a></li>
                        <li><a href="#">Descodificadores</a></li>
                        <li><a href="#">Entrevistas</a></li>
                        <li><a href="#">Reportagens</a></li>
                        <li><a href="#">Especiais</a></li>
                        <li><a href="#">Opinião</a></li>
                        <li><a href="#">BRANDS' ECO</a></li>
                        <li><a href="#">BRANDS' ADVOCATUS</a></li>
                        <li><a href="#">BRANDS' TRABALHO</a></li>
                        <li><a href="#">BRANDS' ECOSEGUROS</a></li>
                        <li><a href="#">BRANDS' CAPITAL VERDE</a></li>
                        <li><a href="#">BRANDS' FUNDOS EUROPEUS</a></li>
                        <li><a href="#">BRANDS' LOCAL ONLINE</a></li>
                        <li><a href="#">BRANDS' +M</a></li>
                        <li><a href="#">Autores</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Sobre</h3>
                    <ul>
                        <li><a href="#">Estatuto Editorial</a></li>
                        <li><a href="#">Ficha Técnica</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Regras da Comunidade</a></li>
                        <li><a href="#">Contactos</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Download</h3>
                    <ul>
                        <li class="btn-footer">
                            <span class="material-symbols-outlined">
                                nutrition
                            </span>
                            <p>App Store</p>
                        </li>
                        <li class="btn-footer">
                            <span class="material-symbols-outlined">
                                play_arrow
                            </span>
                            <p>Google Play</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; Copyright ECO 2024 Swipe News, SA. Todos os Direitos Reservados</p>
            </div>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .footer {
        background-color: #00af00;
        color: white;
        padding: 20px 0;
    }

    .footer-container,
    .footer-bottom {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 3%;
    }

    .footer-column {
        flex: 1;
        min-width: 200px;
        margin: 10px;
    }

    .footer-newsletter {
        display: flex;
        justify-content: space-between;
    }

    .footer-column h3 {
        margin-bottom: 10px;
        font-size: 26px;
        font-weight: 300;
    }

    .footer-column ul {
        list-style: none;
        padding: 0;
    }

    .footer-column ul li {
        margin-bottom: 10px;
    }

    .footer-column ul li a {
        color: white;
        font: bold 13px sans-serif;
        text-decoration: none;
        padding: 10px 0;
    }


    .footer-column ul li a:hover {
        text-decoration: underline;
    }

    .footer-newsletter {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .btn-footer {
        display: flex;
        width: 60%;
        padding: 5px 10px;
        margin-top: 15px;
        border: 2px solid #09cd08;
        border-radius: 40px;
        background-color: transparent;
        color: white;
        cursor: pointer;
        justify-content: flex-start;

    }

    .btn-icon {
        padding: 0 3%;
    }

    .btn-footer:hover {
        background-color: #09cd08;
        box-shadow: 0px 2px 5px 1px #00000013;
    }

    .footer-social {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-top: 20px;
    }

    .footer-social span {
        color: white;
        margin: 0 5px;
        padding: 10px;
        font-size: 20px;
        text-decoration: none;
        border: 2px solid white;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center
    }

    .footer-social a:hover {
        text-decoration: underline;
    }

    .footer-bottom {
        display: flex;
        justify-content: left;
        text-align: left;
        margin: 30px auto;
        padding: 2% 3%;
        border-top: 1px solid rgba(255, 255, 255, 0.479);
        color: rgba(255, 255, 255, 0.479);
    }
</style>