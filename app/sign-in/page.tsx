'use client';
import Image from "next/image";

import React from 'react';
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import Link from "next/link";

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
    rememberMe: z.boolean().default(false).optional(),
});


const SignIn = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            email: "",
            rememberMe: false,
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
                        Welcome back!
                    </span>
                    </div>

                    <FormItem>
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

                    <div className="mt-5 flex justify-between items-center space-x-2 mb-8">
                        <FormField
                            control={form.control}
                            name="rememberMe"
                            render={({field}) => (
                                <FormItem className="flex flex-row items-center justify-center space-x-3 space-y-0">
                                    <FormControl
                                    >
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="h-4 w-4"
                                        />
                                    </FormControl>
                                    <FormLabel
                                        className="text-[12px] font-[400] text-grey cursor-pointer"
                                    >
                                        Remember me
                                    </FormLabel>
                                </FormItem>
                            )}
                        />
                        <span className="text-[12px] font-[14] text-grey underline underline-offset-4 cursor-pointer">
                            Forgot password
                        </span>
                    </div>

                    <Button
                        variant="outline"
                        className="w-full mb-5"
                    >
                        Button</Button>

                    <div className="flex items-center justify-center text-grey">
                        Don’t have an account?&nbsp;
                        <Link
                            href='/sign-up'
                            className="text-primary underline underline-offset-4 cursor-pointer">
                            Sign up
                        </Link>

                    </div>
                </div>
            </form>
        </Form>
    );
};

export default SignIn;
