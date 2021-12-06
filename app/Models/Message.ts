import { DateTime } from 'luxon'
import { BaseModel, column ,belongsTo,BelongsTo} from '@ioc:Adonis/Lucid/Orm'
import Conversation from 'App/Models/Conversation';

export default class Message extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public sender_id: number
  @column()
  public receiver_id: number

  @column()
  public conversationId: number
  @column()
  public text_message: string

  @column()
  public delete_or_not: number

  @belongsTo(() => Conversation)
  public conversation: BelongsTo<typeof Conversation>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
