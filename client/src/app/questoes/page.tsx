"use client";
import FilterQ from "@/components/questoes/filter";
import React from "react";
import Questoes from "@/components/questoes/questoes";

const Page = () => {
  const handleFilterChange = (filters: any) => {
    console.log("Filters changed:", filters);
  };

  const questionData = [
    {
      id: 1,
      enunciado: " Os recursos usados nesse pôster de divulgação de uma campanha levam o leitor a refletir sobre a necessidade de:",
      opcoes_resposta: [
        "A  criticar o tipo de tratamento dado à mulher.",
        "B  rever o desempenho da mulher no trabalho.",
        // ...
      ],
      resposta_correta: "A", // Add the correct answer
      vestibular: "ENEM", // Add the vestibular
      disciplina: "Portuguese", // Add the discipline
      conteudo: "Grammar", // Add the content
      dificuldade: "Medium", // Add the difficulty
      ano: "2021", // Add the year
      // Optional properties
      categoria: "Language", // Add the category if available
      topico: "Gender issues", // Add the topic if available
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
    <div className="bgsvg flex h-screen flex-col items-center justify-center gap-5">
      <FilterQ onFilterChange={handleFilterChange} />
      <Questoes question={questionData[0]} />
    </div>
  );
};

export default Page;