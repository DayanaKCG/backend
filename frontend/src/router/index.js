    import { createRouter, createWebHistory } from 'vue-router';
    import LoginForm from '../components/LoginForm.vue';
    import Dashboard from '../views/Dashboard.vue';
    import { isAuthenticated } from '../services/auth';

    const routes = [
    { path: '/', component: LoginForm },
    {
        path: '/dashboard',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
        if (!isAuthenticated()) {
            next('/');
        } else {
            next();
        }
        },
    },
    ];

    export const router = createRouter({
    history: createWebHistory(),
    routes,
    });
