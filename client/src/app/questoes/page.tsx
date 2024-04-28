'use client'
import FilterQ from "@/components/questoes/filter";
import React from "react";

export default function () {
  const handleFilterChange = (filters: any) => {
    // Lógica para lidar com a mudança de filtro
    console.log("Filters changed:", filters);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <FilterQ onFilterChange={handleFilterChange} />
    </div>
  );
}
