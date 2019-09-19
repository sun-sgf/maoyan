import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Film from '@/pages/Film'
import Cinema from '@/pages/Cinema'
import Mine from '@/pages/Mine'
import Detail from '@/pages/Detail'
import Error from '@/components/Error'


Vue.use(Router)

let router = new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'Home',
      redirect: "/film",
      component: Home,
      children:[
        
        {path:"/film", name:"Film", component:Film},
        {path:"/cinema", name:"Cinema", component:Cinema},
        {path:"/mine", name:"Mine", component:Mine, meta:{isRequired: 1, color: 'red'}
        },
      ]
    },
    {path: '/login', name: 'Login', component: Login},
    {path:"*", component:Error},
    {path:"/detail",name:"Detail", component: Detail}
  ]
})

//路由的全局拦截  接受一个回调函数
router.beforeEach((to, from, next)=>{
  if(to.meta.isRequired){
    let isLogin = JSON.parse(sessionStorage.getItem("isLogin"));
    if(isLogin){
      next();
    }else{
      router.push({name:"Login", params:{to: to}});
    }
  }else{
    next();
  }
});//进入

export default router
