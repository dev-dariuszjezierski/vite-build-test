import {createApp, defineAsyncComponent} from 'vue'
import {createRouter, createWebHashHistory} from "vue-router";
import './style.css'
import App from './App.vue'

const routes = [
    {path: '/home', component: defineAsyncComponent(() => import("./views/View1.vue"))},
    {path: '/about', component: defineAsyncComponent(() => import("./views/View2.vue"))},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
