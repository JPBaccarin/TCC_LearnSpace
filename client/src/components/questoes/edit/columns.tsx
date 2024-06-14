"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { Modal } from "./editmodal";
import { Eraser } from "lucide-react";
import { DeleteModal } from "./deletemodal";
// You can use a Zod schema here if you want.
export type Questoes = {
  id: string;
  enunciado: string;
  materia: string;
  dificuldade: string;
  tema: string;
  ano_prova: number;
  opcoes_resposta_id: string; // Este é um exemplo, você pode alterar para o tipo correto
  resposta_correta: string;
  categoria: string;
  vestibular: string;
  disciplina: string;
  conteudo: string;
  topico: string;
  ano: number;
  enunciado_imagens_id: string; //
};

export const columns: ColumnDef<Questoes>[] = [
  { accessorKey: "vestibular", header: "Vestibular" },
  { accessorKey: "categoria", header: "Categoria" },
  { accessorKey: "disciplina", header: "Disciplina" },
  { accessorKey: "dificuldade", header: "Dificuldade" },
  { accessorKey: "tema", header: "Tema" },
  { accessorKey: "conteudo", header: "Conteúdo" },
  { accessorKey: "topico", header: "Tópico" },
  { accessorKey: "ano", header: "Ano" },
  { accessorKey: "id", header: "ID" },
  {
    id: "actions",
    cell: ({ row }) => {
      const question = row.original;
      const [open, setOpen] = useState(false);
      const [openDelete, setOpenDelete] = useState(false);
      const handleDelete = async () => {
        try {
          await axios.delete(`/api/questions/${question.id}`);
          // Refresh data or handle successful delete here
        } catch (error) {
          console.error("Error:", error);
        }
      };

      const handleEdit = (event) => {
        event.stopPropagation();
        setOpen(true);
      };

      return (
        <div className="flex gap-4">
          
          <DeleteModal open={openDelete} setOpen={setOpenDelete} question={question}></DeleteModal>
          <Modal open={open} setOpen={setOpen} question={question} />
        </div>
      );
    },
  },
];
