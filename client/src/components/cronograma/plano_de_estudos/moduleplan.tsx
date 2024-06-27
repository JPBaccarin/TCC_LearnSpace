import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Markdown from "react-markdown";

const lessons = [
  {
    title: "Video: conjuntos numéricos",
    conteudo: "",
    watched: true,
  },
  { title: "Atividades", conteudo: "atividades", watched: true },
  { title: "Conteúdo Complementar", conteudo: "atividades", watched: true },
  // adicione mais aulas conforme necessário
];

function ModulePlan() {
  return (
    <div>
      <a href=""></a>
      <Accordion type="single" collapsible>
        {lessons.map((lesson, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index} className="">
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "100%",
              }}
              className={lesson.watched ? "bg-green-500" : "bg-red-500"}
            ></span>
            <AccordionTrigger className="text- font-semibold text-foreground">
              {lesson.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-row items-center gap-2 text-foreground">
                <iframe
                  width="360"
                  height="215"
                  src="https://www.youtube.com/embed/s5Xv1SIQnQE?si=CUKrqSpPlCbXTDlD"
                  title="YouTube video player"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default ModulePlan;
