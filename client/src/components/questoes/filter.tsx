"use client";
import { useState } from "react";
import {
  MultiSelector,
  MultiSelectorTrigger,
  MultiSelectorInput,
  MultiSelectorContent,
  MultiSelectorList,
  MultiSelectorItem,
} from "../ui/multi-selector";
import { Button } from "../ui/button"; // Assumindo que você tem um componente Button
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const filterData = [
  { label: "Vestibular", options: ["ENEM"] },
  { label: "Disciplina", options: ["Matemática"] },
  { label: "Conteúdo", options: ["Lógica"] },
  { label: "Dificuldade", options: ["Fácil", "médio", "dificil"] },
  { label: "Ano", options: ["2002", "2003", "2004"] },
];

const FilterQ = () => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, any>>(
    {},
  );

  const handleValuesChange = (label: any, value: any) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [label]: value,
    }));
  };

  const applyFilters = () => {
    console.log("Selected Filters: ", selectedOptions);
  };

  return (
    <div className="">
      <Accordion type="single" collapsible className="bg-background border rounded-lg px-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>Filtros</AccordionTrigger>
          <AccordionContent>
            {filterData.map((filter) => (
              <MultiSelector
                className="mb-4 h-fit w-full sm:mr-4 sm:w-auto"
                key={filter.label}
                values={selectedOptions[filter.label] || []}
                onValuesChange={(value) =>
                  handleValuesChange(filter.label, value)
                }
              >
                <MultiSelectorTrigger>
                  <MultiSelectorInput
                    placeholder={`Select ${filter.label.toLowerCase()}`}
                  />
                </MultiSelectorTrigger>
                <MultiSelectorContent>
                  <MultiSelectorList>
                    {filter.options.map((option) => (
                      <MultiSelectorItem key={option} value={option}>
                        {option}
                      </MultiSelectorItem>
                    ))}
                  </MultiSelectorList>
                </MultiSelectorContent>
              </MultiSelector>
            ))}
            <Button onClick={applyFilters}>Aplicar Filtros</Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterQ;
