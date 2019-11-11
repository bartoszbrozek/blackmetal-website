import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from "../components/HomePage/HomePage.vue"
import Biography from "../components/Biography/Biography.vue"

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            'path': '/',
            component: HomePage,
        },
        {
            'path': '/biography',
            component: Biography,
        }
    ]
})