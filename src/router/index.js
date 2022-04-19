import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/layout/Home";
import Login from "@/views/layout/Login"
import Register from "@/views/layout/Register"
import store from "@/store/index"
import { _ } from 'core-js';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path:"/register",
    name:"Register",
    component:Register,
  }
];



const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path !== "/login" && to.path !== "/register") {
//     if (store.state.user.appkey && store.state.user.username && store.state.user.role) {
//       next();
//       console.log("ok");
//     } else {
//       next("/login");
//     }
//   }else{
//     next()
//   };
// });

export default router
