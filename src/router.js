import { createRouter, createWebHistory } from 'vue-router';
import AppMain from './components/pages/AppMain.vue';
import AppHome from './components/pages/AppHome.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppMain,
        },
    ]
});

export { router };