import WeekClassesHome from "@/components/cronograma/plano_de_estudos/weekclasseshome";
import MainSidebar from "@/components/main/sidebar";
import React from "react";

function page() {
  return (
    <main className="min-h-screen bgsvg">
      <MainSidebar/>
      <div className="p-4 ">
        <h1 className="font-bold text-xl2">Atividades De hoje: </h1>
        <WeekClassesHome />
      </div>
    </main>
  );
}

export default page;
