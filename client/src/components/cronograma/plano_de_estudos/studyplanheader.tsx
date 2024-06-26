import React from "react";

interface StudyPlanHeaderProps {
  totalSemanas: number;
  semanasConcluidas: number;
}

function StudyPlanHeader({
  totalSemanas,
  semanasConcluidas,
}: StudyPlanHeaderProps) {
  const porcentagemConcluida = Math.round(
    (semanasConcluidas / totalSemanas) * 100,
  );

  return (
    <div className="m-4 h-fit w-2/4  rounded-lg border p-4">
      <div className="mb-4 flex flex-row items-baseline justify-between">
        <h1 className="font-bold text-foreground">Plano de Estudos</h1>

        <p className="text-sm">
          Semanas Concluídas:
          <strong className="ml-2 font-bold">
            {semanasConcluidas}/{totalSemanas}
          </strong>
        </p>
      </div>

      <div className="  shadow-lg">
        <div className="mb-2 text-sm font-bold text-primary ">
          Progresso: {porcentagemConcluida}%
        </div>
        <div className="h-2.5 rounded-full bg-secondary">
          <div
            className="h-2.5 rounded-full bg-primary"
            style={{ width: `${porcentagemConcluida}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default StudyPlanHeader;
