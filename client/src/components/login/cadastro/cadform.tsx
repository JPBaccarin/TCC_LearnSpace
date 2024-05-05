"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
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
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import React from "react";
import Link from "next/link";

const formSchema = z.object({
  nome: z.string().min(1, {
    message: "O campo é obrigatório.",
  }),
  email: z.string().email().min(1, {
    message: "O campo é obrigatório.",
  }),
  password: z.string().min(1, {
    message: "O campo é obrigatório.",
  }),
  datanasc: z.string().min(1, {
    message: "O campo é obrigatório.",
  }),
});
export function Cadform() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post("http://localhost:3002/signup", values)
      .then((response) => {
        console.log("Dados enviados com sucesso:", response.data);
        // Adicione aqui lógica adicional após o envio bem-sucedido
        toast({
          title: "Cadastrado com Sucesso!",
          description: "Você foi cadastrado com sucesso.",
        });
      })
      .catch((error) => {
        console.error("Erro ao enviar dados do formulário:", error);
        // Adicione aqui tratamento de erro, se necessário
        toast({
          title: "Erro!",
          description: "Não foi possível efetuar o cadastro. Tente novamente.",
          variant: "destructive",
        });
      });

    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="  space-y-4 rounded-md border p-4 sm:w-2/3 "
      >
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="digite seu nome" type="text" {...field} />
                </FormControl>
                <FormDescription>Digite seu nome.</FormDescription>
                <FormMessage />
              </FormItem>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" type="email" {...field} />
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
        <FormField
          control={form.control}
          name="datanasc"
          render={({ field }) => (
            <FormItem>
              <FormItem>
                <FormLabel>Data de Nascimento</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormDescription>
                  Digite sua data de nascimento.
                </FormDescription>
                <FormMessage />
              </FormItem>
            </FormItem>
          )}
        />
        <div className="space-y-4">
          <Button type="submit">cadastrar</Button>{" "}
          <div className="flex flex-row text-sm text-muted-foreground">
            <p className="mr-2 ">já possui uma conta?</p>
            <Link href={"/login"} className="text-sm text-primary/50 underline">
              {" "}
              log-in
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}
