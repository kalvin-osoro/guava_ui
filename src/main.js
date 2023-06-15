import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import Vue from "vue";
import  CarbonComponentsVue  from "@carbon/vue";
// Vue.use(CarbonComponentsVue);


createApp(App).use(router).use(CarbonComponentsVue).mount('#app')
