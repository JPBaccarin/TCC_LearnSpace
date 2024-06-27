"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ModulePlan from "./moduleplan";

function WeekClasses() {
  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  interface Materia {
    titulo: string;
    descricao: string;
    progresso: number; // Valor entre 0 e 100
  }
  const materias: Materia[] = [
    {
      titulo: "Matemática",
      descricao: "Conjuntos numéricos e operações básicas",
      progresso: 100,
    },
    {
      titulo: "História",
      descricao: "Estudo dos eventos passados",
      progresso: 50,
    },
    // Adicione mais matérias conforme necessário
  ];
  return (
    <div className="m-4 ">
      <div className="grid grid-cols-7 divide-x ">
        {days.map((day) => (
          <button
            key={day}
            className={` mx-1 flex flex-row items-center justify-center rounded-sm border p-2 text-center  ${selectedDay === day ? "bg-primary text-foreground " : "bg-secondary text-foreground"}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <Dialog>
        <DialogTrigger className="mt-4 w-full  space-y-4 text-left ">
         
            {materias.map((materia, index) => (
              <div
                key={index}
                className="min-h-full divide-y divide-dashed rounded-lg border bg-background p-4 shadow-md hover:border-primary "
              >
                <div>
                  <h2 className="mb-2 text-lg font-bold text-foreground">
                    {materia.titulo}
                  </h2>
                  <p className="mb-2 text-foreground">{materia.descricao}</p>
                </div>
                <div className=" w-full  bg-background  pt-1 ">
                  <p className="mb-2 text-sm text-muted-foreground">
                    Progresso:
                    <strong className="ml-2 ">{materia.progresso}%</strong>
                  </p>
                  <div
                    className="h-2.5 rounded-full bg-primary"
                    style={{ width: `${materia.progresso}%`, maxWidth: "100%" }}
                  ></div>
                </div>
              </div>
            ))}
        
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Conteudo do módulo</DialogTitle>
            <DialogDescription>
              <ModulePlan/>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default WeekClasses;
