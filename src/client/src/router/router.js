import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '/src/client/src/views/Home.vue';
import Screen from '@/client/src/views/Screen';
import DiffOfTwo from '@/client/src/views/DiffOfTwo.vue';
import Prom from "@/client/src/views/Prom.vue";

const routes = [
        {
            name: 'VeloGraphics',
            path: '/',
            component: Home
        },
        {
            name: 'Screen',
            path: '/screen',
            component: Screen
        },
        {
            name: 'Prom',
            path: '/prom',
            component: Prom
        },
        {
            name: 'DiffOfTwo',
            path: '/diff',
            component: DiffOfTwo
        }
    ],
    router = createRouter({
        history: createWebHashHistory(process.env.BASE_URL),
        routes
    });

export default router;
