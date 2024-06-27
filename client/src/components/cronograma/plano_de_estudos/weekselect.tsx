import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { useState } from "react";

function WeekSelect() {

  return (
    <div className="m-4 flex flex-col gap-4 rounded-lg border p-4 bg-background">
      <div className="flex gap-4">
        <div className="flex flex-col items-baseline gap-3">
          <h1 className="text-lg font-bold underline underline-offset-2">
            Semana 14
          </h1>
          <p className="text-sm">
            Dias Concluídos: <strong className="font-semibold"> 2/7 </strong>
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <button className="h-fit rounded-lg border">
            <ChevronLeft size={30} className="" />
          </button>
          <button className="h-fit rounded-lg border">
            <ChevronRight size={30} className=" " />
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default WeekSelect;
