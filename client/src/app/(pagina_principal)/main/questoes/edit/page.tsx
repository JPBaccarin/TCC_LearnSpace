"use client";
import React from "react";
import { columns, Questoes } from "@/components/questoes/edit/columns";
import { DataTable } from "@/components/questoes/edit/data-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AddModal } from "@/components/questoes/edit/addmodal";
import { useState, useEffect } from "react";
async function getData(): Promise<Questoes[]> {
  return [
    {
      id: "1",
      vestibular: "enem",
      categoria: "linguagem",
      disciplina: "portugues",
      dificuldade: "facil",
      tema: "tema",
      conteudo: "conteudo",
      topico: "topico",
      ano: 2021,
      enunciado: "enunciado",
      materia: "materia",
      ano_prova: 2021,
      opcoes_resposta_id: "opcoes_resposta_id",
      resposta_correta: "",
      enunciado_imagens_id: "",
    },
  ];
}

export default async function page() {
  const data = await getData();

  return (
    <div className="flex h-screen items-center justify-center">
      <DataTable columns={columns} data={data} />

      <Button className="fixed bottom-0 right-0 m-6 rounded-full bg-blue-500 px-0 p-2  hover:bg-blue-600 hover:scale-125  transition-transform">
        <Plus height={24} width={24} />
      </Button>
    </div>
  );
}
