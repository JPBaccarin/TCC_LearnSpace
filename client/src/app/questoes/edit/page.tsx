import React from "react";
import { columns, Questoes } from "@/components/questoes/edit/columns";
import { DataTable } from "@/components/questoes/edit/data-table";

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
      enunciado_imagens_id: ""
    }
  ];
}

export default async function page() {
  const data = await getData();

  return (
    <div className="flex h-screen items-center justify-center">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
