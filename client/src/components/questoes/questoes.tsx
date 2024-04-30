import React, { FC } from "react";
import ReactMarkdown from "react-markdown";

interface QuestionProps {
  question: {
    id: number;
    enunciado: string;
    opcoes_resposta: string[];
    resposta_correta: string;
    categoria?: string;
    vestibular: string;
    disciplina: string;
    conteudo: string;
    topico?: string;
    dificuldade: string;
    ano: string;
  };
}

const Questoes: FC<QuestionProps> = ({ question }) => {
  return (
    <div className="rounded-md border bg-background p-5 ">
      <ReactMarkdown children={question.enunciado} />
      <ul className="mt-4 flex flex-col gap-2">
        {question.opcoes_resposta.map((option, index) => (
          <li className="flex flex-row items-center gap-4" key={index}>
            <button className="rounded-full border border-primary p-2 px-4 text-2xl text-foreground hover:bg-primary/25 focus:outline-none focus:ring focus:ring-primary/75 active:bg-primary ">
              {String.fromCharCode(index + 65)}
            </button>
            <p>{option}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questoes;
