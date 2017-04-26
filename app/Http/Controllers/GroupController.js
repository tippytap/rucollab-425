'use strict'

const User = use('App/Model/User')
const Group = use('App/Model/Group')
const Membership = use('App/Model/Membership')

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

  * show(request, response) {
    const group = yield Group.find(request.param('id'))
    yield response.sendView('group', {
      group: group.toJSON()
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
