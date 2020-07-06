import Vue from 'vue';
import Router from 'vue-router';

import Mixins from '@/components/Mixins';
import CustomDirective from '@/components/CustomDirective';
import Prototype from '@/components/Prototype';
import Component from '@/components/Component';
import RouterIndex from '@/components/RouterIndex';
import MustacheBind from '@/components/MustacheBind';
import VModel from '@/components/VModel';

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
    },{
        path: '/Component',
        name: 'component',
        component: Component
    },{
        path: '/RouterIndex',
        name: 'routerIndex',
        component: RouterIndex
    },{
        path: '/MustacheBind',
        name: 'mustache-bind',
        component: MustacheBind
    },{
        path: '/VModel',
        name: 'v-model',
        component: VModel
    }
];

const router = new Router({
    routes
});

export default router;