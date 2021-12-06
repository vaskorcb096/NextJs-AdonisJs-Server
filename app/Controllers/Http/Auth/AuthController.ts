import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthValidator from './AuthValidator';
import AuthService from './AuthService';
import Hash from '@ioc:Adonis/Core/Hash'
import User from '../../../Models/User'

export default class AuthController {
    private authValidator: AuthValidator
    private authService: AuthService
    constructor() {

        this.authValidator = new AuthValidator()
        this.authService = new AuthService();
    }

    public async register(ctx: HttpContextContract) {
        console.log("registration", ctx.request.all());
        await this.authValidator.validateSignupSchema(ctx)
        return this.authService.register(ctx);
    }
    public async login(ctx: HttpContextContract) {
        try{
            
            return this.authService.login(ctx);
        // let data = ctx.request.all();
        // console.log(data)
        //  ctx.auth.use('web').attempt(data.email, data.password)
        //  console.log("longin",ctx.auth.use('web').isLoggedIn);
            
        }catch(err){
            console.log("err",err);
        }
        
       
    }
    public async getUser(ctx: HttpContextContract) {
        // console.log("aswef",ctx.auth);
      
        try {
             ctx.auth.use('web').authenticate()
             console.log(ctx.auth.use('web').isLoggedIn);
             
        } catch (error) {
            console.log("Sorry Cannot find user information");

        }
    }

    async logout({ auth }) {
        return auth.logout()
    }


}
