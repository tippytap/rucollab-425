'use strict'

class ChatController {

  constructor (socket, request) {
    this.socket = socket
    this.request = request
  }

  * joinRoom(room){
    console.log("boop!")
  }

  * onMessage(message){
    // const newMessage = yield
  }

}

module.exports = ChatController
