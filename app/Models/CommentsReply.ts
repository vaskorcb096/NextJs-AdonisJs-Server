import { DateTime } from 'luxon'
import { BaseModel, column,belongsTo,BelongsTo,hasMany ,HasMany} from '@ioc:Adonis/Lucid/Orm'
import  Comment  from 'App/Models/Comment';
import  Like  from 'App/Models/Like';

export default class CommentsReply extends BaseModel {
  @hasMany(() => Like)
  public likes: HasMany<typeof Like>

  @column({ isPrimary: true })
  public id: number
  @column()
  public comment_reply_text: string


  
  @column()
  public commentsId: number
    
  @column()
  public user_name: string

  @belongsTo(() => Comment)
  public comment: BelongsTo<typeof Comment>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime


  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
