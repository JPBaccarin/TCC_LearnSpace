import ModulePlan from "@/components/cronograma/plano_de_estudos/moduleplan";
import MainSidebar from "@/components/main/sidebar";
import React from "react";
import TitlePlan from "@/components/cronograma/plano_de_estudos/titleplan";
function Pestudos() {
  return (
    <div className="min-h-screen ">
      <MainSidebar />
      <div className="flex flex-row ">
          <TitlePlan />
        <div className="m-4 w-2/3"></div>
        <div className="w fit m-4">
          <ModulePlan />
        </div>
      </div>
    </div>
  );
}

export default Pestudos;
