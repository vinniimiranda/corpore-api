'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvoiceSchema extends Schema {
  up() {
    this.create('invoices', (table) => {
      table.increments().primary()
      table.integer('company_id')
        .notNullable()
        .references('id')
        .inTable('companies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('customer_id')
        .notNullable()
        .references('id')
        .inTable('customers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.enu('from',['company', 'customer']).notNullable()
      table.enu('to',['company', 'customer']).notNullable()
      table.date('issue_date').notNullable()
      table.date('due_date').notNullable()
      table.float('value').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('invoices')
  }
}

module.exports = InvoiceSchema
