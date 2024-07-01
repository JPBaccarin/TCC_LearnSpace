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
        data: [37, 30], // Substitua pelos valores corretos
        backgroundColor: [
          "rgba(255, 255, 255, 0.2)", // Cor para acertos
          "rgba(255, 0, 0, 0.2)", // Cor para erros
        ],
        borderColor: [
          "rgba(255, 255, 255, 1)", // Borda para acertos
          "rgba(255, 0, 0, 0.7)", // Borda para erros
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
        position: "center" as const,
      },
      title: {
        display: true,
        text: "Percentual de Acertos",
      },
    },
  };

  return (
    <div className="rounded-lg border bg-gray-800 m-1">
      <div className="h-full p-4">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default QuestionChart;
