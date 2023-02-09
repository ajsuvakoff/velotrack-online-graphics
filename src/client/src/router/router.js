import {createRouter, createWebHashHistory} from 'vue-router';
import Upload from '/src/client/src/views/Home.vue';
import Screen from '@/client/src/views/Screen';

const routes = [
        {
            name: 'VeloGraphics',
            path: '/',
            component: Upload
        },
        {
            name: 'Screen',
            path: '/screen',
            component: Screen
        }
    ],
    router = createRouter({
        history: createWebHashHistory(process.env.BASE_URL),
        routes
    });

export default router;
