import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Sidebar from '/src/components/Sidebar.vue'

const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
    path:'/test',
    name: 'Test',
    component: Sidebar
    }
]

const router = createRouter({

    history: createWebHistory(),
    routes,

})

export default router