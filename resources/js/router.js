import {createRouter, createWebHistory} from "vue-router";
import Index from "./components/pages/Index.vue";



const routes = [
    {
        path: '/',
        component: Index,
        name: 'index'
    },
]

export  default createRouter({
    history: createWebHistory(),
    routes,
})
