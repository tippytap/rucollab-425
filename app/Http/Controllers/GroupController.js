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
    response.json(groups)
  }

  * store(request, response) {
    //
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

}

module.exports = GroupController
