'use strict'

const User = use('App/Model/User')
const Group = use('App/Model/Group')
const Membership = use('App/Model/Membership')
const Task = use('App/Model/Task')
const Assignment = use('App/Model/Assignment')
const Message = use('App/Model/Message')

class GroupController {

  * index(request, response) {
    //
  }

  * create(request, response) {
    //
  }

  * allGroups(request, response){
    const user = yield User.find(request.param('userId'))
    let membership = yield Membership.query().where('user_id', user.id).fetch()
    let groups = []
    for(let i in membership.value()){
      let group = yield Group.find(membership.value()[0].id)
      groups.push(group)
    }
    yield request.session.put('groups', groups)
    response.json(groups)
  }

  * test(request, response){
    yield response.send('hey')
    response.redirect('/home')
  }

  * store(request, response) {
    //
  }

  * addMember(request, response){
    const inputs = yield request.all()
    let membership = new Membership()
    let user = yield User.query().where('email', inputs.email).fetch()
    user = user.value()[0]
    membership.user_id = user.id
    membership.group_id = inputs.group_id
    yield membership.save()
    response.redirect('back')
  }

  * show(request, response) {
    const group = yield Group.find(request.param('id'))
    const user = yield request.auth.getUser()
    const tasks = yield Task.query().where('group', group.id).fetch()
    const messages = yield Message.query().where('group', group.id).fetch()
    for(let i in messages.value()){
      let message = messages.value()[i];
      let member = yield Membership.find(message.member)
      let u = yield User.find(member.user_id)
      message.username = u.firstname + " " + u.lastname
    }
    yield response.sendView('group', {
      group: group.toJSON(),
      tasks: tasks.value(),
      user: user.toJSON(),
      messages: messages.value()
    })
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

}

module.exports = GroupController
