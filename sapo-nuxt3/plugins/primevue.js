import { defineNuxtPlugin } from '#app';
import { createApp } from 'vue';
import PrimeVueStyled from 'primevue/config';

export default defineNuxtPlugin(nuxtApp => {
    const app = createApp(null);
    app.use(PrimeVueStyled);
    nuxtApp.vueApp.use(app);
});

