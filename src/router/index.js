import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Account from '../views/Account.vue';
import Stocks from '../views/Stocks.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/account',
        name: 'Account',
        component: Account,
        beforeEnter(to, from, next) {
            if (store.state.token) {
                next();
            } else {
                next({
                    path: '/login',
                });
            }
        },
    },
    {
        path: '/stocks',
        name: 'Stocks',
        component: Stocks,
        beforeEnter(to, from, next) {
            if (store.state.token) {
                next();
            } else {
                next({
                    path: '/login',
                });
            }
        },
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
];

const router = new VueRouter({
    routes,
});

export default router;
