'use client'
import React, { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type FilterType = {
  categoria: string;
  vestibular: string;
  disciplina: string;
  conteudo: string;
  dificuldade: string;
  ano: string;
};

type Props = {
  onFilterChange: (filters: FilterType) => void;
};

const FilterQ: React.FC<Props> = ({ onFilterChange }) => {
  const initialFilters: FilterType = {
    categoria: "",
    vestibular: "",
    disciplina: "",
    conteudo: "",
    dificuldade: "",
    ano: "",
  };

  const [categoria, setCategoria] = useState(initialFilters.categoria);
  const [vestibular, setVestibular] = useState(initialFilters.vestibular);
  const [disciplina, setDisciplina] = useState(initialFilters.disciplina);
  const [conteudo, setConteudo] = useState(initialFilters.conteudo);
  const [dificuldade, setDificuldade] = useState(initialFilters.dificuldade);
  const [ano, setAno] = useState(initialFilters.ano);

  useEffect(() => {
    onFilterChange({ categoria, vestibular, disciplina, conteudo, dificuldade, ano });
  }, [categoria, vestibular, disciplina, conteudo, dificuldade, ano, onFilterChange]);

  const handleFilterChange = (value: string, setter: React.Dispatch<string>) => {
    setter(value);
  };

  const applyFilters = () => {
    // Aqui você pode adicionar a lógica para aplicar os filtros, se necessário
  };

  const renderDropdown = (label: string, value: string, setter: React.Dispatch<string>, options: string[]) => (
    <div>
      <label>{label}:</label>
      <Select>
        <SelectTrigger>
        <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option} onClick={() => handleFilterChange(option, setter)}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  // Simulando os dados dos filtros
  const filterData = [
    { label: "Categoria", value: categoria, setter: setCategoria, options: ["Desconhecido"] },
    { label: "Vestibular", value: vestibular, setter: setVestibular, options: ["ENEM"] },
    { label: "Disciplina", value: disciplina, setter: setDisciplina, options: ["Matemática"] },
    { label: "Conteúdo", value: conteudo, setter: setConteudo, options: ["Lógica"] },
    { label: "Dificuldade", value: dificuldade, setter: setDificuldade, options: ["Fácil", "médio", "dificil"] },
    { label: "Ano", value: ano, setter: setAno, options: ["2002", "2003", "2004"] },
  ];

  return (
    <div>
      <h2>Filters</h2>
      {filterData.map(({ label, value, setter, options }) => renderDropdown(label, value, setter, options))}
      <button onClick={applyFilters}>Aplicar Filtros</button>
    </div>
  );
};

export default FilterQ;
