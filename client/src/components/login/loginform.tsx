"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import React, { SyntheticEvent, useState } from "react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "O campo é obrigatório.",
  }),
  password: z.string().min(1, {
    message: "O campo é obrigatório.",
  }),
});

export function Loginform() {
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="  space-y-4 rounded-md border p-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" type="text" {...field} />
                </FormControl>
                <FormDescription>Digite seu email.</FormDescription>
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
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="senha" type="password" {...field} />
                </FormControl>
                <FormDescription>Digite sua senha.</FormDescription>
                <FormMessage />
              </FormItem>
            </FormItem>
          )}
        />
        <div className="space-y-4">
          <Button type="submit">entrar</Button>{" "}
          <div className="flex flex-row text-sm text-muted-foreground">
            <p className="mr-2 ">não possui uma conta?</p>
            <Link href={"//"} className="text-sm text-primary/50 underline">
              {" "}
              cadastre-se
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}
