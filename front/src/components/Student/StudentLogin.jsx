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
import { axiosClient } from "../../Api/Axios"
import { Await } from "react-router-dom"

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
 
  // 2. Define a submit handler.
  const  onSubmit = async (values ) =>{
     await  axiosClient.get('/sanctum/csrf-cookie')
    const csrf = await  axiosClient.post('/login',values)
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values )
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
    </>

  )
}

export default StudentLogin