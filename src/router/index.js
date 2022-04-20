import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/layout/Home";
import Login from "@/views/layout/Login"
import Register from "@/views/layout/Register"
import store from "@/store/index"
import getMenuRouter from "@/utils/permission"

Vue.use(VueRouter)

const asyncRouterMap = [{
  path: "/product",
  name: "Product",
  component: Home,
  meta: {
    title: "商品"
  },
  children: [{
    path: "/list",
    name: "ProductList",
    component: () => import("@/views/page/ProductList"),
    meta: {
      title: "商品列表"
    }
  },
  {
    path: "/addProduct",
    name: "AddProduct",
    component: () => import("@/views/page/AddProduct"),
    meta: {
      title: "新增商品"
    }
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("@/views/page/Category"),
    meta: {
      title: "商品类目"
    }
  },
  ]
}]

const routes = [
  {
    path: "/product",
    name: "Product",
    component: Home,
    meta: {
      title: "商品"
    },
    children: [{
      path: "list",
      name: "ProductList",
      component: () => import("@/views/page/ProductList"),
      meta: {
        title: "商品列表"
      }
    },
    {
      path: "add",
      name: "AddProduct",
      component: () => import("@/views/page/AddProduct"),
      meta: {
        title: "新增商品"
      }
    }]
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("@/views/page/Integrate"),
        meta: {
          title: "统计"
        }
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
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
