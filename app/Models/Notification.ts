import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Notification extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public comment_id: number
  @column()
  public post_like_id: number
  @column()
  public comment_like_id: number
  @column()
  public notification_sender_id: number
  @column()
  public notification_receiver_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
