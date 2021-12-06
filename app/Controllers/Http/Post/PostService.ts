
import PostQuery from './PostQuery';
import  User  from 'App/Models/User';

export default class PostService {
    private postQuery : PostQuery
    constructor(){

      this.postQuery = new PostQuery
    }
    
    public async post(ctx){
      let post_status = ctx.request.all();
      console.log("dataaaa",post_status);
     
   
      let post :any = await this.postQuery.post(post_status)
      return ctx.response.status(200).send({ msg: 'Sccessfully post!' })
      
     

    }
    public async comment(ctx){
        let post_comment =ctx.request.all();
        console.log("data_comment ",post_comment);
        await this.postQuery.comment(post_comment);
       
    }
    public async reply_comment(ctx) {
      let post_reply_comment =ctx.request.all();
      console.log("reply_comment ",post_reply_comment);
      await this.postQuery.reply_comment(post_reply_comment);

    }
    public async like(ctx) {
      let like =ctx.request.all();
      console.log("likeee ",like);
     return await this.postQuery.likee(like);

    }
    public async delete_post(ctx) {
     
       await this.postQuery.deleted_post(ctx);
    }
     public async deleteComment(ctx){
      await this.postQuery.delete_Comment(ctx);
    }
    public async deleteReplyComment(ctx){
      await this.postQuery.deleteReply_Comment(ctx);

    }

    public async getPost(ctx){
      return await this.postQuery.getPost(ctx);

    }
    public async getUserInfo(ctx){
      return await this.postQuery.getUserInfo(ctx);

    }
   
    
};