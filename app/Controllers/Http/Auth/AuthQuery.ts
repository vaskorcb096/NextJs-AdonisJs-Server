
import User from "App/Models/User";

export default class AuthQuery{
    public async register(data){
        User.create(data)
 
    }
    public async login(data){
      console.log("loginDAta",data);
      const user = await User.findBy('email', data.email)
 
    }
    public async comment(data){
        User.create(data)
       
    }
  
}