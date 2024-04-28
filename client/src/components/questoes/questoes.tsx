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
    <div className="border p-5 rounded-md ">
      <ReactMarkdown children={question.enunciado} />
      <ul className="mt-4 flex gap-2 flex-col">
        {question.opcoes_resposta.map((option, index) => (
          <li className=" flex flex-row gap-4 items-center" key={index}>
            <button className="border border-primary text-foreground p-2 px-4 rounded-full hover:bg-primary/25 active:bg-primary focus:outline-none focus:ring focus:ring-primary/75 ">
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
