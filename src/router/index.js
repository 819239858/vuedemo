import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Page from '@/components/Page'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path:'/',
      component:Page    	
    }
  ]
})
