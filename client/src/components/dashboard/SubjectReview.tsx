import React from "react";

const SubjectReview: React.FC = () => {
  return (
    <div className="rounded-lg bg-gray-800 p-4 shadow-md">
      <h2 className="text-xl font-bold">Matérias que você precisa revisar</h2>
      <div className="mt-4">
        <div className="flex justify-between">
          <span>Biologia - Citologia</span>
          <span>17 questões</span>
        </div>
        <div className="w-full bg-gray-700 h-2 rounded mt-2">
          <div className="bg-red-600 h-2 rounded" style={{ width: "58.82%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default SubjectReview;
