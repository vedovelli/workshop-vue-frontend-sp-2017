import Vue from 'vue'
import Router from 'vue-router'
import Categories from '@/features/Categories'
import Products from '@/features/Products'
import ProductForm from '@/features/Products/form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Categories
    }, {
      path: '/produtos',
      name: 'products.index',
      component: Products,
      children: [
        {
          path: '/produtos/novo',
          name: 'products.new',
          component: ProductForm
        }
      ]
    }, {
      path: '/produtos/:id',
      name: 'products.product',
      component: Products
    }
  ]
})
