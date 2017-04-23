const Vue = require('vue')
const App = require('./app.vue')
const VueRouter = require('vue-router')

///////////////////////////////////////////////////// COMPONENTS //
const Dashboard = require('./dashboard.vue')
///////////////////////////////////////////////////// COMPONENTS //

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '*', redirect: '/dashboard' },
  ]
})


new Vue({
  el: '#app',
  router: router,
  render: function(createElement){
    return createElement(App)
  }
})
