"use client";
import React from "react";
import QuestionChart from "@/components/dashboard/questionchart";
import StatCard from "@/components/dashboard/StatCard";
import SubjectReview from "@/components/dashboard/SubjectReview";
import OtherFeatures from "@/components/dashboard/other_features";
import { Bot } from "lucide-react";
import MainSidebar from "@/components/main/sidebar";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4 text-white ">
      <MainSidebar />
      <div className=" px-20">
           
      <h1 className="mb-4 text-2xl font-bold">Meu Desempenho   </h1>
      <div className="items my-2 flex flex-row gap-2 m-2"><Bot height={24}  /></div>  
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="md:col-span-1 px-1">
          <QuestionChart />
        </div>
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          <StatCard
            title="Questões que acertei"
            value="37"
            description="Matéria com maior taxa de acerto: Matemática"
          />
          <StatCard
            title="Questões que errei"
            value="30"
            description="Matéria com maior taxa de erro: Matemática"
          />
        </div>
      </div>
      <div className="mt-4 px-2">
        <SubjectReview />
      </div>
      <div className="mt-4">
        <OtherFeatures />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
