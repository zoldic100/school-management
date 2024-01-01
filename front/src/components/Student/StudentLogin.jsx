"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
  email: z.string().email(),
  password: z.string().min(8).max(16),
})

import React from 'react'
import {Loader2, LoaderIcon} from 'lucide-react'
import { axiosClient } from "../../Api/Axios"
import { Await, useNavigate } from "react-router-dom"

const StudentLogin = () => {
    // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

 
  const StudentLogin = () => {
   return (
     <div>StudentLogin</div>
   )
 }
 const navigate = useNavigate()
  // 2. Define a submit handler.
  const  onSubmit = async (values) =>{
  
     await  axiosClient.get('/sanctum/csrf-cookie')
    const data =   axiosClient.post('/login',values).then((value)=>
    value.status == '204' && navigate('/student/dashboard')
    // ).catch((err)=>
    // console.log(err.response.data.message)
    // )
    ).catch(({response})=>
    // console.log(response.data.errors.email),
    form.setError('email', {message: response.data.errors.email.join('')})
    )
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    form.formState.isSubmitting
    //console.log(data)
  }
  return (
    <>
    <div className="form-container border bottom-2 px-5 py-3 rounded-lg mx-2 ">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>
                write a valid email
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type={'password'} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting}  type="submit">
          Login {form.formState.isSubmitting && <LoaderIcon className="mx-2 my-1 animate-spin" />}
        </Button>
        
      </form>
    </Form>
    </div>
    </>

  )
}

export default StudentLogin