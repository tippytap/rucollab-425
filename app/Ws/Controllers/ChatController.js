'use strict'

class ChatController {

  constructor (socket, request) {
    this.socket = socket
    this.request = request
  }

  * joinRoom(room){
    console.log('joined ' + room)
  }

  * onMessage(message){
    // const newMessage = yield
    this.socket.toEveryone().inRoom('lobby').emit('message', message)
  }

}

module.exports = ChatController
