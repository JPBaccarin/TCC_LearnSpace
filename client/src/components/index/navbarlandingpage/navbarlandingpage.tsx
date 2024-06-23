import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { learnspace } from "../imgs/images"; // Substitua FiMenu e FiX pelos ícones desejados
import Image from "next/image";

const NavbarLandingPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 p-4 shadow-sm backdrop-blur-sm bg-background/20 border-b ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-row items-center font-bold text-foreground ">
          {/* Use o componente Image para renderizar a imagem */}
          <Image className=" h-10 w-10" src={learnspace} alt="" />
          <p className=" text-primary">Learn</p>
          <br></br>
          <p>Space</p>
        </div>

        <div className="hidden space-x-4 md:flex">
          <a href="/" className="text-foreground hover:text-secondary-foreground">
            Página Inicial
          </a>
          <a href="/sobre" className="text-foreground hover:text-secondary-foreground">
            Sobre Nós
          </a>
        </div>

        <div className="flex items-center md:hidden">
          <button onClick={toggleNavbar} className="text-foreground">
            {isOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className=" pl-4 rounded-lg backdrop-blur-sm  md:hidden">
          <a
            href="/"
            className="block px-4 py-2 text-foreground hover:text-secondary-foreground"
          >
            Página Inicial
          </a>
          <a
            href="/sobre"
            className="block px-4 py-2 text-foreground hover:text-secondary-foreground"
          >
            Sobre Nós
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavbarLandingPage;
