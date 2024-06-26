import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

function WeekActivities() {
  return (
    <div className="flex  m-4 gap-4  flex-col ">
      <div className=" flex gap-4">
        <div className="flex flex-col  items-baseline gap-2">
          <h1 className="text-2xl font-bold underline underline-offset-2">
            Semana 14
          </h1>
          <p>dias concluídos: 2/7</p>
        </div>
        <div className="flex flex-row gap-4">
          <ChevronLeft size={30} className="rounded-full border" />
          <ChevronRight size={30} className="  rounded-full border" />
        </div>
      </div>
      <div className="flex gap-2 ">
        <button className="w-32 rounded-lg border bg-primary px-4 py-2 text-lg font-semibold text-foreground">
          Segunda
        </button>
        <button className="w-32 rounded-lg border bg-secondary px-4 py-2 text-lg font-semibold text-foreground">
          Terça
        </button>
        <button className="w-32 rounded-lg border bg-secondary px-4 py-2 text-lg font-semibold text-foreground">
          Quarta
        </button>
        <button className="w-32 rounded-lg border bg-secondary px-4 py-2 text-lg font-semibold text-foreground">
          Quinta
        </button>
        <button className="w-32 rounded-lg border bg-secondary px-4 py-2 text-lg font-semibold text-foreground">
          Sexta
        </button>
        <button className="w-32 rounded-lg border bg-secondary px-4 py-2 text-lg font-semibold text-foreground">
          Sabado
        </button>
        <button className="w-32 rounded-lg border bg-secondary px-4 py-2 text-lg font-semibold text-foreground">
          Domingo
        </button>
      </div>
    </div>
  );
}

export default WeekActivities;
