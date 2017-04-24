'use strict'

const Schema = use('Schema')

class AssignmentsTableSchema extends Schema {

  up () {
    this.create('assignments', (table) => {
      table.increments()
      table.integer('user_id').references('memberships.id').notNullable()
      table.integer('task_id').references('tasks.id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('assignments')
  }

}

module.exports = AssignmentsTableSchema
