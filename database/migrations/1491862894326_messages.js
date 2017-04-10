'use strict'

const Schema = use('Schema')

class MessagesTableSchema extends Schema {

  up () {
    this.create('messages', (table) => {
      table.increments()
      table.integer('user_id').references('users.id')
      table.string('message_string')
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }

}

module.exports = MessagesTableSchema
