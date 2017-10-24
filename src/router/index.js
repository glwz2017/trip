import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../components/home.vue';
import Booksaudio from '../components/booksaudio.vue';
import  Broadcast from '../components/broadcast.vue';
import Group from '../components/group.vue';
import Mine from '../components/mine.vue';
//导入二级路由
import Movie from '../components/pages/Movie.vue';
import Books from '../components/pages/Books.vue';
import Tv from '../components/pages/Tv.vue';
import City from '../components/pages/City.vue';
import Music from '../components/pages/Music.vue';


Vue.use(Router)
//路径名小写
export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path: '/home',
      name: 'home',
      component:Home
    },{
    path:'/booksaudio',
      name:'booksaudio',
      component:Booksaudio,
      children:[
        {path:'/',name:'Movie',component:Movie},
        {path:'movie',name:'Movie',component:Movie},
     {path:'books',name:'Books',component:Books},
     {path:'tv',name:'Tv',component:Tv},
     {path:'city',name:'City',component:City},
     {path:'music',name:'Music',component:Music},
      ]
    },{
    path:'/broadcast',
      name:'broadcase',
      component:Broadcast
    },
    {
      path:'/group',
      name:'group',
      component:Group
    },{
    path:'/mine',
      name:'mine',
      component:Mine
    }
  ]
})
