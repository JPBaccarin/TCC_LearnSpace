"use client";
import NavbarLandingPage from "@/components/index/navbarlandingpage/navbarlandingpage";
import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  imagem: string;
  nome: string;
  telefone: string;
  email: string;
  descricao: string;
  linkedin: string;
  github: string;
}
const teamMembers: TeamMember[] = [
  {
    imagem: "https://avatars.githubusercontent.com/u/112831294?v=4",
    nome: "João Pedro Baccarin Sardinha",
    telefone: "19 99507-8743",
    email: "joaopedrobaccarin123@gmail.com",
    descricao: "Project Manager",
    linkedin:
      "https://www.linkedin.com/in/jo%C3%A3o-pedro-baccarin-sardinha-424806283/",
    github: "https://github.com/JPBaccarin",
  },
  {
    imagem: "https://avatars.githubusercontent.com/u/112831294?v=4",
    nome: "João Pedro Baccarin Sardinha",
    telefone: "19 99507-8743",
    email: "joaopedrobaccarin123@gmail.com",
    descricao: "Project Manager",
    linkedin:
      "https://www.linkedin.com/in/jo%C3%A3o-pedro-baccarin-sardinha-424806283/",
    github: "https://github.com/JPBaccarin",
  },
  {
    imagem: "https://avatars.githubusercontent.com/u/112831294?v=4",
    nome: "João Pedro Baccarin Sardinha",
    telefone: "19 99507-8743",
    email: "joaopedrobaccarin123@gmail.com",
    descricao: "Project Manager",
    linkedin:
      "https://www.linkedin.com/in/jo%C3%A3o-pedro-baccarin-sardinha-424806283/",
    github: "https://github.com/JPBaccarin",
  },
  {
    imagem: "https://avatars.githubusercontent.com/u/112831294?v=4",
    nome: "João Pedro Baccarin Sardinha",
    telefone: "19 99507-8743",
    email: "joaopedrobaccarin123@gmail.com",
    descricao: "Project Manager",
    linkedin:
      "https://www.linkedin.com/in/jo%C3%A3o-pedro-baccarin-sardinha-424806283/",
    github: "https://github.com/JPBaccarin",
  },
  {
    imagem: "https://avatars.githubusercontent.com/u/112831294?v=4",
    nome: "João Pedro Baccarin Sardinha",
    telefone: "19 99507-8743",
    email: "joaopedrobaccarin123@gmail.com",
    descricao: "Project Manager",
    linkedin:
      "https://www.linkedin.com/in/jo%C3%A3o-pedro-baccarin-sardinha-424806283/",
    github: "https://github.com/JPBaccarin",
  },
  {
    imagem: "https://avatars.githubusercontent.com/u/112831294?v=4",
    nome: "João Pedro Baccarin Sardinha",
    telefone: "19 99507-8743",
    email: "joaopedrobaccarin123@gmail.com",
    descricao: "Project Manager",
    linkedin:
      "https://www.linkedin.com/in/jo%C3%A3o-pedro-baccarin-sardinha-424806283/",
    github: "https://github.com/JPBaccarin",
  },
];

const TeamMemberCard: React.FC<TeamMember> = ({
  imagem,
  nome,
  telefone,
  email,
  descricao,
  linkedin,
  github,
}) => {
  return (
    <motion.div
      className="rounded-lg border bg-background p-4 shadow-md transition-shadow duration-300 hover:border-2 hover:border-primary/50 hover:shadow-lg"
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={imagem}
        alt={nome}
        width={400}
        height={400}
        className="h-auto w-full rounded-md"
      />
      <h3 className="mb-2 mt-2 text-lg font-semibold">{nome}</h3>
      <p className="mt-2 text-sm">{telefone}</p>
      <p className="mt-2 text-sm">{email}</p>
      <p className="mt-2 text-sm">{descricao}</p>
      <a href={linkedin} className="text-primary/75 transition-all hover:text-primary font-semibold">
        LinkedIn
      </a>
      <a href={github} className="ml-4 text-primary/75 transition-all hover:text-primary font-semibold">
        GitHub
      </a>
    </motion.div>
  );
};

const TeamPage = () => {
  return (
    <div className="min-h-screen ">
      <NavbarLandingPage />
      <div className="team-container mt-8 p-4">
        <h1 className="mb-8  text-4xl font-semibold underline ">
          Conheça a Equipe:
        </h1>
        <motion.div
          className="grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;
