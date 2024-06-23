"use client";
import FilterQ from "@/components/questoes/filter";
import React from "react";
import Questoes from "@/components/questoes/questoes";
import MainSidebar from "@/components/main/sidebar";

const Page = () => {
  const handleFilterChange = (filters: any) => {
    console.log("Filters changed:", filters);
  };

  const questionData = [
    {
      id: 1,
      enunciado:
        "(Enem) Jogar baralho é uma atividade que estimula o raciocínio. Um jogo tradicional é a Paciência, que utiliza 52 cartas. Inicialmente são formadas sete colunas com as cartas. A primeira coluna tem uma carta, a segunda tem duas cartas, a terceira tem três cartas, a quarta tem quatro cartas, e assim sucessivamente até a sétima coluna, a qual tem sete cartas, e o que sobra forma o monte, que são as cartas não utilizadas nas colunas. A quantidade de cartas que forma o monte é",
      opcoes_resposta: ["21.", "24.", "26.", "28.", "31."],
      resposta_correta: 1, // Add the correct answer
      vestibular: "ENEM", // Add the vestibular
      disciplina: "Matemática", // Add the discipline
      conteudo: "lógica", // Add the content
      dificuldade: "Media", // Add the difficulty
      ano: "2021", // Add the year
      categoria: "", // Add the category if available
      topico: "", // Add the topic if available
    },
    {
      id: 2,
      enunciado: "Qual é a capital do Brasil?",
      opcoes_resposta: [
        "A  São Paulo",
        "B  Rio de Janeiro",
        "C  Brasília",
        "D  Salvador",
      ],
      resposta_correta: "C",
      vestibular: "ENEM",
      disciplina: "Geography",
      conteudo: "Brazilian Capitals",
      dificuldade: "Easy",
      ano: "2021",
    },
  ];

  return (
    <div className="bgsvg flex min-h-screen  flex-col gap-5 p-10">
      <MainSidebar />
      <FilterQ />
      <Questoes question={questionData[0]} />
    </div>
  );
};

export default Page;
