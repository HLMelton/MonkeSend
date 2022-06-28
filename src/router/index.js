import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import MonkeSend from '/src/components/MonkeSend.vue'

const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
    path:'/monkesend',
    name: 'MonkeSend',
    component: MonkeSend
    },
]

const router = createRouter({

    history: createWebHistory(),
    routes,

})

export default router