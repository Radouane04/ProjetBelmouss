import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import { axiosClient } from "../../api/axios"
import { Link } from "react-router-dom"
const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(30),
})

export default function ClientLogin(){
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "artMenuiserie@gamil.com",
            password:"art1234567"
            
          },
      })
      
      const onSubmit = async (values) => {
            await axiosClient.get('/sanctum/csrf-cookie');
            const data = await axiosClient.post('/login', values);
            console.log(data);
      }; 
      
    return(
      
      <Form {...form}>

      <form onSubmit={form.handleSubmit(onSubmit)} className='form-groupe'>
      
      <div className="form-group">
        <h3 className="title">Se connecter</h3>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Email :</FormLabel>
              <FormControl>
                <Input className="email-input" placeholder="email" {...field} />
              </FormControl>
              <FormMessage className='messagelogin' />
            </FormItem>
          )}
        />
        </div>
        <div className="form-group">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de passe:</FormLabel>
              <FormControl>
                <Input className="password-input" type='password' placeholder="password" {...field} />
              </FormControl>
              <FormMessage className='messagelogin' />
            </FormItem>
          )}
        />
        </div>
        <div className="form-group">
        <button type="submit" id="button-login">Se connecter</button>
        <br/>
        <hr/>
        <p className="paraghraph">Pas encore membre ? <Link to="/Inscrire"><a  style={{textDecoration:'none'}}>S'incrire</a></Link></p>
        </div>
      </form>
    </Form>
    )
}