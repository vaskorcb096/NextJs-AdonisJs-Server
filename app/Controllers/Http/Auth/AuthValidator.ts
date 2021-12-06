import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class AuthValidator {
    public async validateSignupSchema(ctx: HttpContextContract) {
        console.log(ctx.request);
        
        const userSchema = schema.create({
            email: schema.string({}, [
                rules.email({
                    sanitize: true,
                    ignoreMaxLength: false,
                    //domainSpecificValidation: true,
                }),
                rules.unique({ table: 'users', column: 'email' }),
            ]),
            first_name: schema.string({
                escape: true,
                trim: true
            }),
            last_name: schema.string({
                escape: true,
                trim: true
            }),
            gender: schema.string({
                escape: true,
                trim: true
            }),
            password: schema.string({
                escape: true,
                trim: true
            }, [
                rules.minLength(6),
                rules.confirmed()
            ]),


        })
        const msg = {
            'email.required': 'Email is required',
            'email.unique': 'Email is already in use',
            'email.email': 'Invalid email address',
            'first_name.required': 'Firstname is required',
            'last_name.required': 'Lastname is required',
            'password.required': 'Password is required',
            'password.minLength': 'Password must be at least 6 charecters long',
            'password_confirmation.confirmed': "Password and confirm password doesn't match",
            'gender.required': "Gender is required",
        }
        //return await ctx.request.validate({ schema: userSchema, messages : msg })
        try {
            const payload = await ctx.request.validate({ schema: userSchema, messages: msg })
            return payload
        } catch (error) {
            return ctx.response.status(422).send(error.messages)
        }

    }

    public async validateLoginSchema(ctx : HttpContextContract){
        const userSchema = schema.create({
          email: schema.string({trim: true}, [
            rules.email({
              sanitize: true,
            }),
  
          ]),
          password: schema.string({trim: true,}),
  
  
        })
        const msg =  {
          'email.required': 'Email is required',
          'password.required': 'Password is required',
  
        }
        try {
            console.log(ctx.request.body);
          const payload = await ctx.request.validate({ schema: userSchema, messages : msg })
          console.log("payload",payload)
          return payload
        } catch (error) {
            console.log("aef",error.message);
           return ctx.response.status(422).send(error.messages)
        }
  
  
  
      }
      
}