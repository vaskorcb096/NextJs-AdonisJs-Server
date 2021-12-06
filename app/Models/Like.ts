import { DateTime } from 'luxon'
import { BaseModel, column,BelongsTo, belongsTo} from '@ioc:Adonis/Lucid/Orm'
import  Post  from 'App/Models/Post';
import  Comment  from 'App/Models/Comment';
import  CommentsReply  from 'App/Models/CommentsReply';



export default class Like extends BaseModel {
  
  
  @column({ isPrimary: true })
  public id: number
  @column()
  public like_user: string

  @column()
  public postId: number

  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>
  @column()
  public commentsId: number

  @belongsTo(() => Comment)
  public comment: BelongsTo<typeof Comment>

  @column()
  public commentsReplyId: number

  @belongsTo(() => CommentsReply)
  public reply_comments: BelongsTo<typeof CommentsReply>
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
