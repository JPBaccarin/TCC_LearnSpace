'use client'
import React, { useState, useEffect } from 'react';

// Definição da interface para os dados dos cards
interface CardData {
  title: string;
  imageSrc: string;
}

// Componente do card
const Card: React.FC<CardData> = ({ title, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card" />
      <h2>{title}</h2>
    </div>
  );
};

// Função para calcular a cor média
const calculateAverageColor = async (imageSrc: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const width = img.width;
      const height = img.height;
      const blockSize = 5; // tamanho do bloco para amostragem, ajuste conforme necessário

      canvas.width = width;
      canvas.height = height;
      ctx!.drawImage(img, 0, 0);

      let r = 0;
      let g = 0;
      let b = 0;

      let count = 0;

      for (let y = 0; y < height; y += blockSize) {
        for (let x = 0; x < width; x += blockSize) {
          const data = ctx!.getImageData(x, y, 1, 1).data;
          r += data[0];
          g += data[1];
          b += data[2];
          count++;
        }
      }

      // Calcula a média das cores
      r = Math.floor(r / count);
      g = Math.floor(g / count);
      b = Math.floor(b / count);

      const avgColor = `rgb(${r}, ${g}, ${b})`;
      resolve(avgColor);
    };

    img.onerror = (error) => {
      reject(error);
    };
  });
};

// Componente principal
const CardList: React.FC<{ data: CardData[] }> = ({ data }) => {
  const [averageColors, setAverageColors] = useState<string[]>([]);

  useEffect(() => {
    const getColors = async () => {
      const colors = await Promise.all(data.map((item) => calculateAverageColor(item.imageSrc)));
      setAverageColors(colors);
    };

    getColors();
  }, [data]);

  return (
    <div className="card-list">
      {data.map((item, index) => (
        <div
          className="card"
          key={index}
          style={{ backgroundColor: averageColors[index] }}
        >
          <img src={item.imageSrc} alt="Card" />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

// Dados dos cards
const cardData: CardData[] = [
  { title: 'Card 1', imageSrc: 'imagem1.jpg' },
  { title: 'Card 2', imageSrc: 'imagem2.jpg' },
  { title: 'Card 3', imageSrc: 'imagem3.jpg' },
  // Adicione mais dados conforme necessário
];

// Componente principal que renderiza a lista de cards
const Teste: React.FC = () => {
  return <CardList data={cardData} />;
};

export default Teste;
