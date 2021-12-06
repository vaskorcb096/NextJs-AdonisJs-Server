import { DateTime } from 'luxon'
import { BaseModel, column ,hasMany,HasMany,belongsTo,BelongsTo} from '@ioc:Adonis/Lucid/Orm'

import  Post  from 'App/Models/Post';
import  CommentsReply  from 'App/Models/CommentsReply';
import Like  from 'App/Models/Like';

export default class Comment extends BaseModel {
  @hasMany(() => Like,{
    foreignKey: 'commentsId'
  })
  public likes: HasMany<typeof Like>

  @hasMany(() => CommentsReply,{
    foreignKey: 'commentsId'
  })
  public comments_replies: HasMany<typeof CommentsReply>
  @column({ isPrimary: true })
  public id: number
  @column()
  public comment_text:string
  @column()
  public user_name: string
  


  @column()
  public postId: number

  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
