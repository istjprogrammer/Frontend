import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import Home from './Home'
import About from './About'

export default createRouter ({
    //Hash, History()
    //https://google.com/#/login => Hash
    //https://google.com/login => History
    history: createWebHistory(),
    routes:[
        {
            path: "/", //https://google.com
            component: Home
        },
        {
            path: "/about", //https://google.com/about
            component: About
        }
    ]
})