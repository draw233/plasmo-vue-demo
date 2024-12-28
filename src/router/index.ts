import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { basicRoutes } from './basicRoute'

const router = createRouter({
    history: createWebHashHistory(),
    routes: basicRoutes
})

export default router