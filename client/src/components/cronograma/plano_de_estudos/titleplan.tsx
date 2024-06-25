import React from "react";

function TitlePlan() {
  return (
    <div className="w-[200px] flex-1 p-4 px-16 py-3">
      <div className="flex space-x-4 text-center shadow-lg ">
        <h1 className="mb-4 font-bold">Bem-vindo ao Dashboard</h1>
        <div className="flex flex-row-reverse space-x-4 space-x-reverse">
          <button className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-gray-700  focus:outline-none">
            Botão 1
          </button>
          <button className="focus:shadow-outline rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-gray-700  focus:outline-none">
            Botão 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default TitlePlan;
