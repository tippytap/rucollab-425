'use strict'

class ChatController {

  constructor (socket, request) {
    this.socket = socket
    this.request = request
  }

  * onMessage(message){
    // const newMessage = yield 
  }

}

module.exports = ChatController
