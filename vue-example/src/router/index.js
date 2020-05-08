import Vue from 'vue';
import Router from 'vue-router';

import MixinsTest from '@/components/MixinsTest';

Vue.use(Router)

const routes=[
    {
        path:'/MixinsTest',
        name:'mixinstest',
        component: MixinsTest
    }
];

const router = new Router({
    routes
});

export default router;