'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments()
      table.string('firstName', 80).notNullable()
      table.string('lastName', 80).notNullable()
      table.string('email', 80).notNullable()
      table.string('cpf', 11).notNullable().unique()
      table.integer('company_id')
        .references('id')
        .inTable('companies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentSchema
