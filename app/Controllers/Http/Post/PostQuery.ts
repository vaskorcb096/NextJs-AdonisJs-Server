import Comment from "App/Models/Comment";
import Post from "App/Models/Post";
import CommentsReply from "App/Models/CommentsReply";
import Like  from 'App/Models/Like';
import  User  from 'App/Models/User';

export default class PostQuery{
    public async post(post_status){
        console.log("data",post_status);
        Post.create(post_status)
       
    }
    public async comment(post_commment) {
        console.log("post_comment",post_commment);
        Comment.create(post_commment);
    }
    public async reply_comment(reply_commment) {
        console.log("reply_commment",reply_commment);
        CommentsReply.create(reply_commment);
    }
    public async likee(like) {
        var keys=Object.keys(like);
        console.log(keys);
        const cmdId=keys.find((key)=>{
            if(key==='comments_id') {
                return 'comments_id';
            }
            if(key==='post_id') {
                return 'post_id';
            }
            else return 'comments_reply_id';
            
        })
        console.log("id",cmdId);
        if(cmdId) {
            if(cmdId=='comments_id') {
                const comment=await Like.query().where('like_user', like.like_user).andWhere('comments_id',like.comments_id);
                console.log(comment);
                if(comment.length<1)
                {
                    
                    Like.create(like);
                    return true;

                }
                else {
                    await Like.query().where('like_user', like.like_user).andWhere('comments_id',like.comments_id).delete();
                    return false;
                }
               
            }
            else if(cmdId=='post_id'){
                const post=await Like.query().where('like_user', like.like_user).andWhere('post_id',like.post_id);
                
                if(post.length<1){
                    Like.create(like);
                    return true;

                }
                
                else {
                    await Like.query().where('like_user', like.like_user).andWhere('post_id',like.post_id).delete();
                    return false;

                }
              

            }
            else {
                const reply=await Like.query().where('like_user', like.like_user).andWhere('comments_reply_id',like.comments_reply_id);
                if(reply.length<1){
                    Like.create(like);
                    return true;

                }
              
                else {
                    await Like.query().where('like_user', like.like_user).andWhere('comments_reply_id',like.comments_reply_id).delete();
                    return false; 

                }
                
            }
            
           
         
        

        

        }
        console.log("likeeeeee",like);


        
    }
    public async deleted_post(ctx){
        console.log("deleted post",ctx.params.id);
        const post=await Post.findOrFail(ctx.params.id);
        await post.delete();
        
    }
    public async delete_Comment(ctx){
        console.log("deleted comment",ctx.params.id);
        const comment =await Comment.findOrFail(ctx.params.id);
        await comment.delete();

    }
    public async deleteReply_Comment(ctx){
        console.log("deleted reply comment",ctx.params.id);
        const replyComment =await CommentsReply.findOrFail(ctx.params.id);
        await replyComment.delete();

    }
    public async getPost(ctx){
        const users=await User.query().preload('posts',(postsQuery)=>{
            postsQuery.preload('comments',(replyComment)=>{
                replyComment.preload('comments_replies',(replyCommentLike)=>{
                    replyCommentLike.preload('likes');

                }).preload('likes')

            }).orderBy('id','desc').preload('likes')

        }).orderBy('id','desc');
       
     
        return users ;       
    }
    public async getUserInfo(ctx){
        const {email}=ctx.request.params();
        console.log(email);
         const user = await User.findBy('email',email)
        //  console.log(user);
         return user;
       
             
    }
  
    
}