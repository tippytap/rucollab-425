window.dashboard = window.dashboard || {};
(function(ns){
/////////////////////////////////////////////////// COMPONENTS //
ns.dashboardTemp = document.getElementById('dashboard')

const Dashboard = {
  template: "#dashboard",
  data: function(){
    return {
      message: "Hello world"
    }
  }
}
ns.Dashboard = Dashboard

const Group = {

}
ns.Group = Group

const Chat = {}
ns.Chat = Chat

const Todo = {}
ns.Todo = Todo
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
