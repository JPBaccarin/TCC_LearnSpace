"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",  
  }),
  password: z.string().min(2, {
    message: "Password tem que ter pelo menos 8 caracteres",
  }),
})

export function Loginform() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField          
          control={form.control}
          name="username"          

          render={({ field }) => (        
            
          <FormItem>            
            <FormItem >
              <FormLabel >Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>              
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />          
            </FormItem>        

          </FormItem>             
          )}
        />

        <FormField          
          control={form.control}
          name="password"          

          render={({ field }) => (        
            
          <FormItem>            
            <FormItem >
              <FormLabel >Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>              
              <FormDescription>
                This is your public display password.
              </FormDescription>
              <FormMessage />          
            </FormItem>        

          </FormItem>             
          )}
        />
       
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

