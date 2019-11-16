import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from 'pages/Layout.vue'
import Recommend from 'pages/recommend/Recommend.vue'
import Classifly from 'pages/classifly/Classifly.vue'
import ListenList from 'pages/listenlist/ListenList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/index"
  },
  {
    path: '/index',
    component:Layout,
    children:[
      {
        path:'recommend',
        component:Recommend
      },
      {
        path:'classifly',
        component:Classifly
      },
      {
        path:'listenlist',
        component:ListenList
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
