import FormCronograma from "@/components/cronograma/form";
import MainSidebar from "@/components/main/sidebar";
import React from "react";

function Cronograma() {
  return (
    <div className="min-h-screen ">
      <MainSidebar />
      <div className="flex flex-row ">
        <div className="w-1/6"></div>
        <div className="m-4 w-screen">
          <FormCronograma />
        </div>
        <div className="w-1/6"></div>
      </div>
    </div>
  );
}

export default Cronograma;
