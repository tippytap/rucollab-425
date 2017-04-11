'use strict'

const Lucid = use('Lucid')

class Message extends Lucid {

  user(){
    return this.belongsTo('App/Model/User')
  }
}

module.exports = Message
