import VueRouter from 'vue-router'
import Vue from 'vue'
import { routes } from './route.js'
import titleAPI from '@/utils/setTitle.js'
if(!window.VueRouter){
  Vue.use(VueRouter)
}
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

router.afterEach((to,form)=>{
  if(to.meta.title){
    titleAPI.setRouterTitle(to.meta.title)
  }
})

export default router
