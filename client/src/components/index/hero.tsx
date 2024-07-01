import React, { useEffect } from "react";
import { motion } from "framer-motion";

const colors = ["#EF4444", "#F04343", "#DC2626", "#B91C1C", "#991B1B"];

const Hero: React.FC = () => {
  useEffect(() => {
    const rainContainer = document.querySelector(".rain-container");

    if (rainContainer) {
      for (let i = 0; i < 200; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const fontSize = `${Math.random() * 25 + 15}px`;
        const opacity = Math.random().toFixed(2); // Corrigido para transformar em string com 2 casas decimais
        const rotation = Math.random() * 360 - 10;
        const duration = `${Math.random() * 20 + 4}s`;

        const rainElement = document.createElement("div");
        rainElement.className = "rain";
        rainElement.style.left = `${Math.random() * 100}%`;
        rainElement.style.top = `${-Math.random() * 100}%`;
        rainElement.style.animation = `rain ${duration} cubic-bezier(0.19, 1, 0.22, 1) infinite`;
        rainElement.style.color = randomColor;
        rainElement.style.fontSize = fontSize;
        rainElement.style.opacity = opacity; // Corrigido para string
        rainElement.style.transform = `rotate(${rotation}deg)`;
        rainElement.textContent = String.fromCharCode(Math.random() * 200 + 65);

        rainContainer.appendChild(rainElement);
      }
    }
  }, []);

  return (
    <section className="transition- relative flex h-screen max-h-[600px] flex-col items-center justify-center overflow-hidden bg-background text-foreground duration-150">
      <div className="rain-container"></div>
      <motion.div
        className="z-10 flex flex-col items-center rounded-xl bg-background/75 p-6 text-center backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-4 text-4xl font-extrabold sm:text-5xl"
          whileHover={{ scale: 1.02 }}
        >
          Bem-vindo ao LearnSpace
        </motion.div>
        <motion.p
          className="mb-8 text-base sm:text-lg"
          whileHover={{ scale: 1.02 }}
        >
          Sua plataforma de estudos com IA
        </motion.p>
        <motion.a
          href="./login/cadastro"
          className="rounded-full bg-red-500 px-6 py-2 text-base text-white transition duration-300 ease-in-out hover:bg-red-600 hover:text-foreground sm:text-lg"
          whileHover={{ scale: 1.1 }}
        >
          Comece Agora
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
