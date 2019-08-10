import Vue from 'vue'
import VueRouter from 'vue-router'
import { resolve } from 'dns';

Vue.use(VueRouter)


let router = new VueRouter({
    routes: [
        { path: '/', name: 'home', component: resolve =>import{} },
    ]
});

export default router;
