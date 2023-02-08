import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Products from '../views/ProductsView.vue'
import ProductShow from '../views/ProductShow.vue'
import Clients from '../views/ClientsView.vue'
import ProductEdit from '../views/ProductEdit.vue'
import ProductCreate from '../views/ProductCreate.vue'
import ClientCreate from '../views/ClientCreate.vue'



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
    path: '/products/create',
    name: 'ProductCreate',
    component: ProductCreate
  },
  {
    path: '/clients',
    name: 'ClientsView',
    component: Clients
  },
  {
    path: '/clients/create',
    name: 'ClientCreate',
    component: ClientCreate
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
