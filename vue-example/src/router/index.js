import Vue from 'vue';
import Router from 'vue-router';

import Mixins from '@/components/Mixins';
import CustomDirective from '@/components/CustomDirective';
import Prototype from '@/components/Prototype';


Vue.use(Router)

const routes = [
    {
        path: '/Mixins',
        name: 'mixins',
        component: Mixins
    }, {
        path: '/CustomDirective',
        name: 'customdirective',
        component: CustomDirective
    }, {
        path: '/Prototype',
        name: 'prototype',
        component: Prototype
    }
];

const router = new Router({
    routes
});

export default router;