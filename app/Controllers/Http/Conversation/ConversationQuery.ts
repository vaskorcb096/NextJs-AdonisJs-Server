import Conversation from 'App/Models/Conversation';
import  Message  from 'App/Models/Message';
import  User  from 'App/Models/User';
import Database from '@ioc:Adonis/Lucid/Database'
export default class ConversationQuery{

    public async addToDatabase(data){

        console.log(data);
        Conversation.create(data);
        

    }
    public async getToDatabase(value){
        
        const conver = await Conversation
        .query() 
        .where('sender_id', value.id)
        .orWhere('receiver_id',value.id)
        // console.log(conver);
        console.log(conver);
        
        return conver;
         
    }
    public async addToMessage(data){
        console.log(data);
        Message.create(data);
    }
    public async getToMessage(id){
        console.log(id);
        const messages = await Message
        .query() // 👈now have access to all query builder methods
        .where('conversation_id', id.id)
          return messages;

            
        
    }
    public async getUsername(user){
        const receiver_info=await User.find(user.id);
         return receiver_info;
    }
    public async deleteMessage(ctx){
        const id =ctx.params.id;
        console.log(id);
        const body=ctx.request.body();
       
     
        if(body.loggedInUSerId===body.sender_id) {
            console.log("aaa");
            if(body.time<=600) {
                const msg = await Message.findOrFail(id)
                console.log(msg);
                msg.delete_or_not =0
                await msg.save()

            }
            else {
                console.log("xxx");
                const msg = await Message.findOrFail(id)
                console.log(msg);
                msg.delete_or_not =1
                await msg.save()

            }
            
        }
        else {
            console.log("aaaxxx");
            
            const msg = await Message.findOrFail(id)
            console.log(msg);
            msg.delete_or_not =2
            await msg.save()

        }
        return "ok"

    }
    

    
}