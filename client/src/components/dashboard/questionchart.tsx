"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

function QuestionChart() {
  const data = {
    labels: ["Acertos", "Erros"],
    datasets: [
      {
        label: "Média da semana",
        data: [12, 5], // Substitua 12 por acertos e 5 por erros conforme seus dados
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)", // Cor para acertos
          "rgba(255, 99, 132, 0.2)", // Cor para erros
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)", // Borda para acertos
          "rgba(255, 99, 132, 1)", // Borda para erros
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,

    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Média de erros e acertos da semana",
      },
    },
  };

  return (
    <div className="rounded-lg border bg-background m-1">
      <div className="h-full ">
        <Doughnut data={data} options={options} className="p-4" />
      </div>
    </div>
  );
}

export default QuestionChart;
