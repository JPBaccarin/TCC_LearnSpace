import ModulePlan from "@/components/cronograma/plano_de_estudos/moduleplan";
import MainSidebar from "@/components/main/sidebar";
import React from "react";
import StudyPlanHeader from "@/components/cronograma/plano_de_estudos/studyplanheader";
import WeekActivities from "@/components/cronograma/plano_de_estudos/week";
function Pestudos() {
  return (
    <div className="min-h-screen ">
      <MainSidebar />
      <div className="flex flex-row justify-between">
        <StudyPlanHeader totalSemanas={30} semanasConcluidas={10} />
        <ModulePlan />
      </div>
      <div>
        <WeekActivities />
      </div>
    </div>
  );
}

export default Pestudos;
