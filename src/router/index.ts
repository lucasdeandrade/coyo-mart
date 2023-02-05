import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Products from '../views/ProductsView.vue'
import ProductShow from '../views/ProductShow.vue'
import Clients from '../views/ClientsView.vue'
import ProductEdit from '../views/ProductEdit.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/products',
    name: 'ProductsView',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'ProductShow',
    component: ProductShow
  },
  {
    path: '/products/:id/edit',
    name: 'ProductEdit',
    component: ProductEdit
  },
  {
    path: '/clients',
    name: 'ClientsView',
    component: Clients
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
