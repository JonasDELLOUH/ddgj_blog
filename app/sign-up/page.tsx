'use client';

import React from 'react';
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const firstNameSchema = z.string()
    .min(2, { message: "Le prénom doit comporter au moins 2 caractères." })
    .max(50, { message: "Le prénom ne peut pas dépasser 50 caractères." })
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, { message: "Le prénom contient des caractères non valides." });

const lastNameSchema = z.string()
    .min(2, { message: "Le nom doit comporter au moins 2 caractères." })
    .max(50, { message: "Le nom ne peut pas dépasser 50 caractères." })
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, { message: "Le nom contient des caractères non valides." });

const passwordSchema = z.string()
    .min(8, {message: "Le mot de passe doit comporter au moins 8 caractères."})
    .max(64, {message: "Le mot de passe ne peut pas dépasser 64 caractères."})
    .regex(/[A-Z]/, {message: "Le mot de passe doit contenir au moins une lettre majuscule."})
    .regex(/[a-z]/, {message: "Le mot de passe doit contenir au moins une lettre minuscule."})
    .regex(/[0-9]/, {message: "Le mot de passe doit contenir au moins un chiffre."})
    .regex(/[^A-Za-z0-9]/, {message: "Le mot de passe doit contenir au moins un caractère spécial."});

const emailSchema = z.string()
    .email({message: "Veuillez entrer une adresse email valide."});

const formSchema = z.object({
    password: passwordSchema,
    email: emailSchema,
    agreeToTermPrivacy: z.boolean().default(false).optional(),
    firstName: firstNameSchema,
    lastName: lastNameSchema,
});

const SignUp = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            lastName: "",
            firstName: "",
            password: "",
            email: "",
            agreeToTermPrivacy: false,
        },
    },);

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
  return (
      <Form {...form}>
          <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="sm:flex sm:justify-center sm:items-center px-0 sm:px-[10%] sm:py-10 h-screen max-h-screen bg-cover sm:bg-[url('/sign_bg.png')] sm:p-0 sm:border-0">
              <div
                  className="bg-background sm:rounded-[24px] rounded-none px-5 py-10 w-full shadow-none
                 sm:shadow-[0px_3px_6px_0px_#0907130A,0px_10px_10px_0px_#09071308,0px_23px_14px_0px_#09071305,0px_40px_16px_0px_#09071303,0px_63px_18px_0px_#09071300] max-w-[582px]"
              >
                  <div className="flex justify-center">

                    <span className='font-bold text-2xl '>
                        Create an account
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row justify-center items-center gap-y-5 gap-x-2 w-full">
                      <FormItem className='w-full'>
                          <FormField
                              control={form.control}
                              name="firstName"
                              render={({field}) => (
                                  <FormItem>
                                      <FormLabel>First name <span className='danger'>*</span></FormLabel>
                                      <FormControl>
                                          <Input
                                              type="text"
                                              className='border-[1px]'
                                              placeholder="Jonas" {...field} />
                                      </FormControl>
                                      <FormMessage/>
                                  </FormItem>
                              )}
                          />
                      </FormItem>
                      <FormItem className='w-full'>
                          <FormField
                              control={form.control}
                              name="firstName"
                              render={({field}) => (
                                  <FormItem>
                                      <FormLabel>First name <span className='danger'>*</span></FormLabel>
                                      <FormControl>
                                          <Input
                                              type="text"
                                              className='border-[1px]'
                                              placeholder="Jonas" {...field} />
                                      </FormControl>
                                      <FormMessage/>
                                  </FormItem>
                              )}
                          />
                      </FormItem>
                  </div>

                  <FormItem className='mt-5'>
                      <FormField
                          control={form.control}
                          name="email"
                          render={({field}) => (
                              <FormItem>
                                  <FormLabel>Email <span className='danger'>*</span></FormLabel>
                                  <FormControl>
                                      <Input
                                          type="email"
                                          prefix={
                                              <Image
                                                  src="/icons/mail.svg"
                                                  height={20}
                                                  width={20}
                                                  alt="Email"
                                              />
                                          }
                                          className='border-[1px]'
                                          placeholder="jdellouh1@gmail.com" {...field} />
                                  </FormControl>
                                  <FormMessage/>
                              </FormItem>
                          )}
                      />
                  </FormItem>

                  <FormItem className="mt-5">
                      <FormField
                          control={form.control}
                          name="password"
                          render={({field}) => (
                              <FormItem>
                                  <FormLabel>Password <span className='danger'>*</span></FormLabel>
                                  <FormControl>
                                      <Input
                                          prefix={
                                              <Image
                                                  src="/icons/lock-password.svg"
                                                  height={20}
                                                  width={20}
                                                  alt="Password"/>
                                          }
                                          type={"password"}
                                          className='rounded-[12px] border-[1px]'
                                          placeholder="• • • • • • • • • • •" {...field} />
                                  </FormControl>
                                  <FormMessage/>
                              </FormItem>
                          )}
                      />
                  </FormItem>

                  <FormItem className="mt-5">
                      <FormField
                          control={form.control}
                          name="agreeToTermPrivacy"
                          render={({field}) => (
                              <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                                  <FormControl
                                  >
                                      <Checkbox
                                          checked={field.value}
                                          onCheckedChange={field.onChange}
                                          className="h-4 w-4"
                                      />
                                  </FormControl>
                                  <FormLabel
                                      className="text-[12px] font-[400] text-grey"
                                  >
                                      I agree to the <span className='text-primary cursor-pointer'>Terms</span> and <span
                                      className='text-primary cursor-pointer'>Privacy policy</span>
                                  </FormLabel>
                              </FormItem>
                          )}
                      />
                  </FormItem>

                  <Button
                      variant="outline"
                      className="w-full mb-5 mt-10"
                  >
                      Button</Button>

                  <div className="flex items-center justify-center text-grey">
                      Already have an account?&nbsp;
                      <Link
                          href="/sign-in"
                          className="text-primary underline underline-offset-4 cursor-pointer">
                            Sign in
                        </Link>

                  </div>
              </div>
          </form>
      </Form>
  );
};

export default SignUp;
