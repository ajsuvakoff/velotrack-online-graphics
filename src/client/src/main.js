import {createApp} from 'vue';
import App from './App.vue';
import router from './router/router';

createApp(App).use(router).mount('#app');

router.beforeEach((to, from, next) => {
    document.title = typeof to.name === 'string' ? to.name : '';
    next();
});