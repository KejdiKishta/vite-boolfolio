import { createRouter, createWebHistory } from 'vue-router';
import AppMain from './components/AppMain.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/projects',
            name: 'projects',
            component: AppMain,
        },
    ]
});

export { router };