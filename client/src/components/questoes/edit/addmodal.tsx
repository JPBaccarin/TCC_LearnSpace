import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FilePenLine } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  question: any; // Replace 'any' with the type of your question
}
export function AddModal({ open, setOpen, question }: ModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <FilePenLine />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <QuestionsForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <FilePenLine />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Adicionar Questão</DrawerTitle>
          <DrawerDescription>
            Adicione uma nova questão ao banco de dados.
          </DrawerDescription>
        </DrawerHeader>
        <QuestionsForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Adicionar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
function QuestionsForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid grid-cols-2 gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="id">ID da Questão</Label>
        <p className="text-sm text-muted-foreground " >
          id
        </p>
      </div>
      <div className="col-span-2 grid gap-2">
        <Label htmlFor="enunciado">Enunciado</Label>
        <Textarea id="teste" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="materia">Matéria</Label>
        <Input id="materia" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dificuldade">Dificuldade</Label>
        <Input id="dificuldade" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="tema">Tema</Label>
        <Input id="tema" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="ano_prova">Ano da Prova</Label>
        <Input id="ano_prova" />
      </div>
      <div className="col-span-2 grid gap-2">
        <Label htmlFor="opcoes_resposta_id">ID das Opções de Resposta</Label>
        <Input id="opcoes_resposta_id" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="resposta_correta">Resposta Correta</Label>
        <Input id="resposta_correta" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="categoria">Categoria</Label>
        <Input id="categoria" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="vestibular">Vestibular</Label>
        <Input id="vestibular" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="disciplina">Disciplina</Label>
        <Input id="disciplina" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="conteudo">Conteúdo</Label>
        <Input id="conteudo" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="topico">Tópico</Label>
        <Input id="topico" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="ano">Ano</Label>
        <Input id="ano" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="enunciado_imagens_id">Imagens da Questão</Label>
        <Input type="file" accept="image/*" />
      </div>
      <Button type="submit" className="col-span-2 grid ">
        Salvar Alterações
      </Button>
    </form>
  );
}
