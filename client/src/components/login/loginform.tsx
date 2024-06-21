"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
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
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  email: z.string().min(1, {
    message: "O campo é obrigatório.",
  }),
  password: z.string().min(1, {
    message: "O campo é obrigatório.",
  }),
});
export function Loginform() {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post("http://localhost:3002/login", values);
      const { token, papel } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", papel);
      toast({
        title: "Login efetuado com sucesso",
        description: "Você será redirecionado para a página principal.",
      });

      router.push("/");
    } catch (error) {
      toast({
        title: "Erro ao efetuar login",
        description: "Verifique suas credenciais e tente novamente.",
        variant: "destructive",
      });
    }
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
          <Button type="submit" className="w-full">
            entrar
          </Button>{" "}
          <div className="flex flex-row text-sm text-muted-foreground">
            <p className="mr-2 ">não possui uma conta?</p>
            <Link
              href={"/login/cadastro"}
              className="text-sm text-primary/50 underline"
            >
              {" "}
              cadastre-se
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}
