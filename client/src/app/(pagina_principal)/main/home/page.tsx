import WeekClassesHome from "@/components/cronograma/plano_de_estudos/weekclasseshome";
import QuestionChart from "@/components/dashboard/questionchart";
import MainSidebar from "@/components/main/sidebar";
import React from "react";

function page() {
  return (
    <main className="bgsvg min-h-screen">
      <MainSidebar />
      <div className="p-4 ">
        <h1 className="text-2xl font-bold ">Atividades De hoje: </h1>
        <div className="flex flex-row justify-between bg-background/75 border p-2">
          <WeekClassesHome />
          <QuestionChart />
        </div>
      </div>
    </main>
  );
}

export default page;
