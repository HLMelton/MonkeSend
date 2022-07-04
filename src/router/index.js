import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import MonkeSend from '/src/components/MonkeSend.vue'
import About from '/src/components/About.vue'
import ThreeBG from '/src/components/ThreeBG.vue'

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
    {
    path:'/about',
    name:'',
    component: About
    },
    {
    path:'/ThreeBG',
    name:'ThreeBG',
    component: ThreeBG
    }
]

const router = createRouter({

    history: createWebHistory(),
    routes,

})

export default router