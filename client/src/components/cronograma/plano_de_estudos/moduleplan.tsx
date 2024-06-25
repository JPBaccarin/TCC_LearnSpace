import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const lessons = [
  {
    title: "Aula de História",
    conteudo:
      "Aula de HistóriaAula de HistóriaAula de HistóriaAula de HistóriaAula de HistóriaAula de História",
    watched: true,
  },
  { title: "Aula de Matemática", conteudo: "teste", watched: false },
  // adicione mais aulas conforme necessário
];

function ModulePlan() {
  return (
    <div className="flex  w-[440px] flex-col rounded-lg border p-4">
      <h3 className="text-xl font-bold">Conteúdo do módulo</h3>
      <div>
        <Accordion type="single" collapsible>
          {lessons.map((lesson, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="text- font-semibold">
                {lesson.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-row items-center gap-2">
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "100%",
                      backgroundColor: lesson.watched ? "green" : "red",
                    }}
                  ></span>
                  <p>{lesson.conteudo}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default ModulePlan;
