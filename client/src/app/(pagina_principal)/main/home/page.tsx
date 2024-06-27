'use client'
import WeekClassesHome from "@/components/cronograma/plano_de_estudos/weekclasseshome";
import OtherFeatures from "@/components/dashboard/other_features";
import QuestionChart from "@/components/dashboard/questionchart";
import MainSidebar from "@/components/main/sidebar";
import React from "react";

function page() {
  return (
    <main className="bgsvg min-h-screen">
      <MainSidebar />
      <div>
        <div className="m-2 flex flex-row justify-between gap-40 rounded-md border bg-background p-2">
          <div className=" w-full">
            <h1 className="m-4 mb-0  text-2xl font-bold ">
              Atividades De hoje:
            </h1>

            <WeekClassesHome />
          </div>
          <QuestionChart />
        </div>
        <OtherFeatures/>
      </div>
    </main>
  );
}

export default page;
