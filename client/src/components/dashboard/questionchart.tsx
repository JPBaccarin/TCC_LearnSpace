'use client'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

function QuestionChart() {
  const data = {
    labels: ['Acertos', 'Erros'],
    datasets: [
      {
        label: '# de Votos',
        data: [12, 5], // Substitua 12 por acertos e 5 por erros conforme seus dados
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)', // Cor para acertos
          'rgba(255, 99, 132, 0.2)', // Cor para erros
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)', // Borda para acertos
          'rgba(255, 99, 132, 1)', // Borda para erros
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Adicione ou remova conforme necessário
  };

  return (
    <div className='bg-background rounded-lg border'>
      <Doughnut data={data} options={options} className='p-4' />
    </div>
  );
}

export default QuestionChart;