'use strict'

const Message = use('App/Model/Message')
const User = use('App/Model/User')
const Membership = use('App/Model/Membership')

class ChatController {

  constructor (socket, request) {
    this.socket = socket
    this.request = request
  }

  * joinRoom(room){
    // const user = this.socket.currentUser
    console.log(room)
  }

  * onMessage(msg){
    let message = new Message()
    let user = yield User.find(msg.user_id)
    let membership = yield Membership.query().where('user_id', msg.user_id).fetch()

    message.member = membership.value()[0].id
    message.message_string = msg.message_string
    message.group = msg.group_id
    yield message.save()
    message.username = user.firstname + " " + user.lastname

    this.socket.toEveryone().inRoom(msg.channel).emit('message', message.toJSON())
  }

}

module.exports = ChatController
