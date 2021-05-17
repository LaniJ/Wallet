import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

// import Signup from '../views/Signup';
// import Login from '../views/Login';
// import ForgotPassword from '../views/ForgotPassword';
// import ResetPassword from '../views/ResetPassword';
// import Otp from '../views/Otp';
// import ResetPage from '../views/ResetPage';
// import Dashboard from '../views/Dashboard';
// import Transactions from '../views/Transactions';

const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue');
const Signup = () => import(/* webpackChunkName: "signup" */ '../views/Signup');
const Login = () => import(/* webpackChunkName: "login" */ '../views/Login');
const ForgotPassword = () => import(/* webpackChunkName: "forgotPassword" */ '../views/ForgotPassword');
const ResetPassword = () => import(/* webpackChunkName: "resetPassword" */ '../views/ResetPassword');
const Otp = () => import(/* webpackChunkName: "otp" */ '../views/Otp');
const Pin = () => import(/* webpackChunkName: "pin" */ '../views/Pin');
const ResetPage = () => import(/* webpackChunkName: "ResetPage" */ '../views/ResetPage');
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard');
const Transactions = () => import(/* webpackChunkName: "transactions" */ '../views/Transactions');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/resetForm',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/otp',
    name: 'Otp',
    component: Otp,
  },
  {
    path: '/pin',
    name: 'Pin',
    component: Pin,
  },
  {
    path: '/resetpassword',
    name: 'ResetPage',
    component: ResetPage,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
});

export default router;
