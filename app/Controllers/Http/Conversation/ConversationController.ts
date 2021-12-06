
import ConversationQuery from './ConversationQuery';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
export default class ConversationController {
  private ConversationQuery:ConversationQuery
   
    constructor() {
        this.ConversationQuery=new ConversationQuery()
   
    }
    public async conversation(ctx:HttpContextContract){
        console.log("Hello");
        let data=ctx.request.all();
        return await this.ConversationQuery.addToDatabase(data);
    }
    public async getConversation(ctx:HttpContextContract){
      
   
        const value=ctx.params;
        console.log("Get Hello",value);
        return await this.ConversationQuery.getToDatabase(value);
    }
    public async messages(ctx:HttpContextContract){
        let data=ctx.request.all();
        return await this.ConversationQuery.addToMessage(data);

    }
    public async getmessages(ctx:HttpContextContract){
        const value=ctx.params;
        console.log("Get Messagesss",value);
    
        return await this.ConversationQuery.getToMessage(value);

    }
    public async getUsername(ctx:HttpContextContract){
        const value=ctx.request.params();
        console.log("Get User",value);
        return await this.ConversationQuery.getUsername(value);

    }
    public  async deleteSppecificUserMessage(ctx:HttpContextContract){
        console.log("delete Message user")
         return await this.ConversationQuery.deleteMessage(ctx);
        
        
         }



    }
    
    

}
