import './assets/main.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";
import es from "./locales/es.json";
import en from "./locales/en.json";
import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
    locale: navigator.language, // Idioma del navegador
    fallbackLocale: "es", // Si no encuentra la traducción en el idioma actual, buscará en español
    messages: { es, en }, // Nuestros archivos de traducción
    legacy: false, // Para que no muestre advertencias en la consola
});

app.use(createPinia())
app.use(i18n);
app.use(router)
app.use(ElementPlus)
app.use(Particles, {
    init: async (engine: any) => {
        await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
    },
});

app.mount('#app')

