import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Conversations extends BaseSchema {
  protected tableName = 'conversations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('sender_id')
      table.integer('receiver_id')


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
       table.timestamp('created_at', { useTz: true }).notNullable()
       table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
  
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
