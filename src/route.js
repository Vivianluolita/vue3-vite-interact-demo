import {createRouter,createWebHashHistory} from 'vue-router'

import Design from "./components/HelloWorld.vue";

const routes = [
  {
    path:'/',
    redirect:'/design'
  },{
    path:'/design',
    component:Design
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router