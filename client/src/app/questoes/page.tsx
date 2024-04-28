"use client";
import FilterQ from "@/components/questoes/filter";
import React from "react";
import Questoes from "@/components/questoes/questoes";

export default function () {
  const handleFilterChange = (filters: any) => {
    // Lógica para lidar com a mudança de filtro
    console.log("Filters changed:", filters);
  };

  const questionData = [
    {
      "id": 1,
      "enunciado": " Os recursos usados nesse pôster de divulgação de uma campanha levam o leitor a refletir sobre a necessidade de:",
      "opcoes_resposta": [
        "A  criticar o tipo de tratamento dado à mulher.",
        "B  rever o desempenho da mulher no trabalho.",
        "C  questionar a sobrecarga de atribuições da mulher.",
        "D  analisar as pesquisas acerca dos direitos da mulher.",
        "E  censurar a mulher pelo uso de determinadas palavras."
      ],
      "resposta_correta": "A  ",
      "categoria": "Desconhecido",
      "vestibular": "ENEM",
      "disciplina": "matemática",
      "conteudo": "lógica", // Adicionando a propriedade "conteudo"
      "tópico": "",
      "dificuldade": "fácil",
      "ano": "2002"
    }
  ];

  return (
    <div className="flex items-center justify-center flex-col gap-5 h-screen bgsvg">
      <FilterQ onFilterChange={handleFilterChange} />
      <Questoes question={questionData[0]} />
    </div>
  );
}
