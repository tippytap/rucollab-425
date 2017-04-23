window.dashboard = window.dashboard || {};
(function(ns){
/////////////////////////////////////////////////// COMPONENTS //
const Dashboard = {
  template: "<h2>{{ message }}</h2>",
  data: function(){
    return {
      message: "Hello world"
    }
  }
}
/////////////////////////////////////////////////// COMPONENTS //


/////////////////////////////////////////////////// ROUTES //
const routes = [
  {path: '/dashboard', component: Dashboard},
  {path: '*', redirect: '/dashboard'}
]
const router = new VueRouter({
  routes
})
/////////////////////////////////////////////////// ROUTES //

/////////////////////////////////////////////////// CORE //
const app = new Vue({
  el: '#app',
  router
})
/////////////////////////////////////////////////// CORE //
})(window.dashboard);
