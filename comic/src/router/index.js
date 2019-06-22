import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Episodes from '../views/Episodes.vue';
import Episode from '../views/Episode.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/episodes', component: Episodes },
    { path: '/episode/:id', component: Episode },
    { path: '/contact', component: Contact },
];

const router = new VueRouter({routes});

export default router;
