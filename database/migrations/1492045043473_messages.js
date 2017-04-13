'use strict'

const Schema = use('Schema')

class MessagesTableSchema extends Schema {

  up () {
    this.create('messages', (table) => {
      table.increments()
      table.integer('member').references('memberships.id')
      table.string('message_string')
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }

}

module.exports = MessagesTableSchema
