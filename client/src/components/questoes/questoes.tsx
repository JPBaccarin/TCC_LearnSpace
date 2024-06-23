import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Badge } from "../ui/badge";

interface QuestionProps {
  question: {
    id: number;
    enunciado: string;
    opcoes_resposta: string[];
    resposta_correta: string | number;
    categoria?: string[] | any;
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
    <div className="rounded-lg border dark: bg-background">
      <div className="border-b p-4 pb-2">
        <h3 className="mb-2 text-lg font-bold">{question.id}</h3>
        <div className="flex flex-wrap justify-between">
          <div>
            <div className="flex gap-2">
              {question.categoria &&
                question.categoria.map((cat: any, index: number) => (
                  <Badge variant="outline" key={index} className="">
                    {cat}
                  </Badge>
                ))}
              <Badge variant="outline" className="">
                {question.vestibular}
              </Badge>
              <Badge variant="outline" className="">
                {question.ano}
              </Badge>
              <Badge variant="outline" className="">
                {question.disciplina}
              </Badge>
              <Badge variant="outline" className="">
                {question.conteudo}
              </Badge>
              {question.topico && <Badge className="">{question.topico}</Badge>}
            </div>
          </div>
          <Badge variant="outline"> {question.dificuldade}</Badge>
        </div>
      </div>
      <div className="rounded-md bg-background p-4 pt-2">
        <ReactMarkdown>{question.enunciado}</ReactMarkdown>
        <ul className="mt-4 flex flex-col gap-2">
          {question.opcoes_resposta.map((option, index) => (
            <li
              className="flex flex-row items-center gap-4 rounded-lg border p-2 transition-all duration-100 hover:border-primary/30"
              key={index}
            >
              <button className="flex w-[42px] items-center justify-center rounded-xl border border-primary p-2 px-4 text-xl font-semibold text-foreground hover:bg-primary/25 focus:outline-none focus:ring focus:ring-primary/75 active:bg-primary">
                {String.fromCharCode(index + 65)}
              </button>
              <p>{option}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Questoes;
