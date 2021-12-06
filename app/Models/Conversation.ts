import { DateTime } from 'luxon'
import { BaseModel, column,hasMany,HasMany } from '@ioc:Adonis/Lucid/Orm'
import  Message  from 'App/Models/Message';

export default class Conversation extends BaseModel {
  @hasMany(() => Message,{
    foreignKey: 'conversationId',
  })
  public messgaes: HasMany<typeof Message>
  @column({ isPrimary: true })
  public id: number
  @column()
  public sender_id: number
  @column()
  public receiver_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
