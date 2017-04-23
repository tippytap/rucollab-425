'use strict'

const User = use('App/Model/User')

class UserController {

  * index(request, response) {
    //
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    // get all inputs
    const userInputs = request.all()

    // get the validation result, which is yielded from the Validator service provider
    // using the rules defined statically on the User class
    // const validation = yield Validator.validate(userInputs, User.rules)

    // if our validation has failed, then redirect to the register screen and flash the
    // error messages. this is done by yielding to the request and calling redirect on the response obj
    // if(validation.fails()){
    //   yield request.withAll().andWith({errors: validation.messages()}).flash()
    //   response.redirect('back')
    // }

    // otherwise, nothing bad happened and we create a new user instance
    const user = new User()

    // set the user properties
    user.firstname = userInputs.firstname
    user.lastname = userInputs.lastname
    user.password = userInputs.password
    user.email = userInputs.email
    user.phone = userInputs.phone
    user.is_active = true
    user.profile_img_path = "/assets/default.png"

    // save the new user to the database, but we have to make sure to yield it
    // because this is a generator function and it won't do anything otherwise
    yield user.save()

    // yield the request, including a success message to be flashed to the user
    yield request.withAll().andWith({messages: ["User created successfully"]}).flash()

    // redirect the user back to the login page so that they can login to the system
    response.redirect("/login")

  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

  * login(request, response){
    const email = request.input('email')
    const password = request.input('password')

    try{
      yield request.auth.attempt(email, password)
      yield request.withAll().andWith({messages: ['Logged in!']}).flash()
    }
    catch(e){
      yield request.withAll().andWith({errors: [{message: 'Incorrect email and/or password.'}]}).flash()
      response.redirect('back')
      return
    }
    response.redirect('/')

  }

  * logout(request, response) {
    yield request.auth.logout()
    response.redirect('/')

  }

  * home(request, response){
    let user = yield request.auth.getUser()
    yield response.sendView('dashboard', { 'user': user.toJSON() })
  }

}

module.exports = UserController
