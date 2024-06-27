import ModulePlan from "@/components/cronograma/plano_de_estudos/moduleplan";
import MainSidebar from "@/components/main/sidebar";
import React from "react";
import StudyPlanHeader from "@/components/cronograma/plano_de_estudos/studyplanheader";
import WeekActivities from "@/components/cronograma/plano_de_estudos/weekselect";
import WeekClasses from "@/components/cronograma/plano_de_estudos/weekclasses";
function Pestudos() {
  return (
    <div className="min-h-screen bgsvg ">
      <MainSidebar />
      <div className="flex flex-row justify-between">
        <StudyPlanHeader totalSemanas={30} semanasConcluidas={10} />
        <WeekActivities />
      </div>
      <div>
        <WeekClasses/>
      </div>
    </div>
  );
}

export default Pestudos;
