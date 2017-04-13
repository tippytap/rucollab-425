'use strict'

const Schema = use('Schema')

class GroupsTableSchema extends Schema {

  up () {
    this.table('groups', (table) => {
      // alter groups table
      table.foreign('group_leader').references('memberships.id')
    })
  }

  down () {
    this.table('groups', (table) => {
      // opposite of up goes here
      table.dropForeign('group_leader', ['groups_group_leader_foreign'])
    })
  }

}

module.exports = GroupsTableSchema
