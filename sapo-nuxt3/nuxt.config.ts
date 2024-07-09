// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            supabaseUrl: process.env.SUPABASE_URL,
            supabaseKey: process.env.SUPABASE_KEY,
            apiKey: process.env.API_KEY
        }
    },
    css: [
        '@/assets/styles/global.css',
        "primeicons/primeicons.css",
    ],
    modules: [
        '@primevue/nuxt-module'
    ],
    primevue: {
        options: {
            theme: {
                preset: Aura
            }
        },
        components: ['Button']
    },
    transpile: ['primevue'],
})
