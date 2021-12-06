// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PostService from './PostService';

export default class PostsController {
    private PostService :PostService
    constructor() {

        this.PostService=new PostService();
    }

    public async post(ctx:HttpContextContract){
        console.log("post ",ctx.request.all())
        return this.PostService.post(ctx);

    }
    public async like(ctx:HttpContextContract){
        console.log("like",ctx.request.all());
        return this.PostService.like(ctx);



    }
    public async comment(ctx:HttpContextContract){
        console.log("comment",ctx.request.all())
        return this.PostService.comment(ctx);
        

    }
    public async reply_comment(ctx:HttpContextContract){
        console.log("reply_comment",ctx.request.all())
        return this.PostService.reply_comment(ctx);
        

    }
    public async deletePost(ctx:HttpContextContract){
        console.log("delete POst",ctx.params);
        return this.PostService.delete_post(ctx);

    }
    public async deleteComment(ctx:HttpContextContract) {
        console.log("delete commment",ctx.params);
        return this.PostService.deleteComment(ctx);
    }
    public async deleteReplyComment(ctx:HttpContextContract) {
        console.log("delete reply commment",ctx.params);
        return this.PostService.deleteReplyComment(ctx);
    }

    public async getPost(ctx:HttpContextContract){
        console.log("get Data from Post");
        return this.PostService.getPost(ctx);


    }
    public async getUserInfo(ctx:HttpContextContract) {
        console.log("Get One user");
        return this.PostService.getUserInfo(ctx);

    }
  
    
}
