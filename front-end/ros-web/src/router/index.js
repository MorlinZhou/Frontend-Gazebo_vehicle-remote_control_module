import Vue from 'vue'
import { createRouter, createWebHistory, VueRouter } from 'vue-router'
import Home from "../views/Home.vue"
import HomePage from "../views/index"

const routes = [

  {
    path: '/Panel',
    name: 'ControlPanel',
    component: Home,
    meta: {
      label: "ControlPanel"
    }
  },
  {
    path: '/',
    name: 'index',
    component: HomePage,
    meta: {
      label: "ControlPanel"
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
