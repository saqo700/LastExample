import Vue from 'vue'
import Router from 'vue-router'
// import firebase from "firebase/app";

//grouped routes
import auth from '../pages/auth/auth'
import user from "../pages/users/user";
import admin from "../pages/admin/admin";

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    ...auth,
    ...user,
    ...admin
  ],

})

// Router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser
//   const requireAuth = to.matched.some(...user => record.meta.auth)
//
//   if (requireAuth && !currentUser) {
//
//     next('/login')
//
//   }
//
//   next()
// })

