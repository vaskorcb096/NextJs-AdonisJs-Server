import AuthQuery from './AuthQuery';

export default class AuthService {
    private authQuery : AuthQuery
    constructor(){
      this.authQuery = new AuthQuery
    }
    
    public async register(ctx){
      let data = ctx.request.all();
      console.log("data",data);
   
      delete data.register.agree
      delete data.register.reg
      delete data.register.password_confirmation
      let username = data.register.first_name +'_'+ data.register.last_name
      data.register.username = username
      
      let user :any = await this.authQuery.register(data.register)
      if(user){
        let obj ={
          username: user?.first_name +' '+user?.last_name,  
        }
      }
      return ctx.response.status(200).send({ msg: 'Account created successfully!' })
      
    }
  

   




    
    
    
};