import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CommentsReplies extends BaseSchema {
  protected tableName = 'comments_replies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('comment_reply_text')
      table.integer('comments_id')
      table.string('user_name')
      .unsigned()
      .references('comments.id')
      .onDelete('CASCADE')


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
