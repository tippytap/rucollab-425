'use strict'

const Schema = use('Schema')

class MembershipsTableSchema extends Schema {

  up () {
    this.create('memberships', (table) => {
      table.increments()
      table.integer('user_id').references('users.id')
      table.integer('group_id').references('groups.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('memberships')
  }

}

module.exports = MembershipsTableSchema
