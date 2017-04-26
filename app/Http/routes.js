'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', function * (request, response){
  const isLoggedIn = yield request.auth.check()
  const user = yield request.auth.getUser()
  if(user){
    if(isLoggedIn){
      console.log('isLoggedIn')
      response.redirect('home')
      return
    }
    else{
      yield request.auth.logout()
    }
  }
  response.redirect('/login')
})
Route.get('/login').render('login')
Route.get('/register').render('register')
Route.resource('users', 'UserController').except('store', 'login').middleware('auth')
Route.get('/home', 'UserController.home').as('home').middleware('auth')
Route.post('/store', 'UserController.store')
Route.post('/login', 'UserController.login')
Route.get('/logout', 'UserController.logout')
Route.resource('groups', 'GroupController').except('show').middleware('auth')
Route.get('/group/:id', 'GroupController.show')
Route.post('/groups/addMember/', 'GroupController.addMember')
Route.get('/groups/allGroups/:userId', 'GroupController.allGroups')
Route.post('/groups/test', 'GroupController.test')
Route.resource('tasks', 'TaskController').middleware('auth')
