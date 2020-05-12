import Vue from 'vue';
import Router from 'vue-router';

import Mixins from '@/components/Mixins';
import CustomDirective from '@/components/CustomDirective';

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
    }
];

const router = new Router({
    routes
});

export default router;