'use strict'

const Schema = use('Schema')

class TasksTableSchema extends Schema {

  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.string('task_string').notNullable()
      table.integer('group').notNullable().references('groups.id')
      // table.date('due_date').notNullable()
      // table.dateTime('time_completed').nullable()
      table.boolean('is_complete')
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }

}

module.exports = TasksTableSchema
