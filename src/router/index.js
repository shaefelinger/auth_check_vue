import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import RegisterUser from '../views/RegisterUser.vue';
import LoginUser from '../views/LoginUser.vue';
import Cookies from '../views/Cookies.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterUser,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginUser,
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: Cookies,
  },
  {
    path: '/userlist',
    name: 'UserList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/UserList.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
