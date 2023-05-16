import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/category/AddCategory.vue'
import CategoryView from '../views/category/CategoryView.vue'
import ProductView from '../views/product/ProductView.vue'
import AdminView from '../views/AdminView.vue';
import AddProduct from '../views/product/AddProduct.vue'
import EditCategory from '../views/category/EditCategory.vue';
import EditProduct from '../views/product/EditProduct.vue';
import ShowDetails from '../views/product/ShowDetails.vue';
import WishList from '../views/product/WishList.vue';
// import ListProducts from '../views/Category/ListProducts';
import SignupView from '../views/SignupView.vue';
import SigninView from '../views/SigninView.vue';
import CartView from '../views/CartView.vue';

import SuccessView from '../views/payment/SuccessView.vue';
import FailedView from '../views/payment/FailedView.vue';
import CheckoutView from '../views/checkout/CheckoutView.vue';


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  // // category detail page
  // {
  //   path: '/category/show/:id',
  //   name: 'ListProducts',
  //   component: ListProducts,
  // },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'CategoryView',
    component: CategoryView
  },

  //category edit
  {
    path: '/admin/category/edit/:id',
    name: 'EditCategory',
    component: EditCategory
  },

   // admin home page
   {
    path: '/admin',
    name: 'AdminView',
    component: AdminView,
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: ProductView,
  },


  //product
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },

  // edit product
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct,
  },

    // show details of product
  {
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails,
  },

   // sign up and signin

   {
    path: '/signup',
    name: 'SignupView',
    component: SignupView,
  },
  {
    path: '/signin',
    name: 'SigninView',
    component: SigninView,
  },

  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList,
  },

  {
    path: '/product',
    name: 'ProductView',
    component: ProductView
  },

  {
    path: '/cart',
    name: 'CartView',
    component: CartView,
  },

   // sucess and fail pages
   {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component: SuccessView,
  },

  {
    path: '/payment/failed',
    name: 'PaymentFail',
    component: FailedView,
  },

  // checkout

  {
    path: '/checkout',
    name: 'CheckoutView',
    component: CheckoutView,
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
