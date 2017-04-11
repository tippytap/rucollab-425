'use strict'

const Message = use('App/Model/Message')
const User = use('App/Model/User')

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

    message.user_id = msg.user_id
    message.message_string = msg.message_string
    yield message.save()
    message.username = user.username

    this.socket.toEveryone().inRoom('lobby').emit('message', message.toJSON())
  }

}

module.exports = ChatController
