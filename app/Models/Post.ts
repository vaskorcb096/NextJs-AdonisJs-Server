import { DateTime } from 'luxon'
import {
    column,
    BaseModel,
    hasMany,
    HasMany,
    belongsTo,
    BelongsTo

 
  } from '@ioc:Adonis/Lucid/Orm'
import Comment from 'App/Models/Comment'
import Like from 'App/Models/Like'

import  User  from 'App/Models/User';
import  CommentsReply  from 'App/Models/CommentsReply';

export default class Post extends BaseModel {
    @hasMany(() => Comment)
   public comments: HasMany<typeof Comment>
    @hasMany(() => Like)
    public likes: HasMany<typeof Like>
    @hasMany(() => CommentsReply)
    public comments_replies: HasMany<typeof CommentsReply>

  @column({ isPrimary: true })
  public id: number

  @column()
  public post_status: string

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
 
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime



}
