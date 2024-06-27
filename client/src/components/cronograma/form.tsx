"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { DatePickerWithPresets } from "../ui/datePickerTime";
import Title from "./title";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MultiSelector,
  MultiSelectorTrigger,
  MultiSelectorInput,
  MultiSelectorContent,
  MultiSelectorList,
  MultiSelectorItem,
} from "../ui/multi-selector";

const options = [
  { label: "Segunda", value: "Segunda" },
  { label: "Terça", value: "Terça" },
  { label: "Quarta", value: "Quarta" },
  { label: "Quinta", value: "Quinta" },
  { label: "Sexta", value: "Sexta" },
  { label: "Sábado", value: "Sábado" },
  { label: "Domingo", value: "Domingo" },
];

function FormCronograma() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <form className="mb-4 grid grid-cols-2 gap-8 rounded border-l bg-accent border-primary px-8 pb-8 pt-6 shadow-md">
      <div className="">
        <Title name="Informações do Plano" />
        <div className="">
          <p>Nome do Plano</p>
          <Input />
        </div>

        <div className=" ">
          <p>Início</p>
          <DatePickerWithPresets showTime={false} showPresets={false} />
        </div>

        <div className=" ">
          <p>Data da Prova</p>
          <DatePickerWithPresets showTime={false} showPresets={false} />
        </div>

        <div className=" ">
          <p>Curso Desejado</p>
          <Input placeholder="Curso Desejado" />
        </div>

        <div className=" ">
          <p>Instituição</p>
          <Input type="option" />
        </div>

        <div className="appearance-none">
          <p>Tipo de Cronograma</p>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Selecione um Cronograma " />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Cronogramas</SelectLabel>
                <SelectItem value="Teste1">Teste1</SelectItem>
                <SelectItem value="Teste2">Teste2</SelectItem>
                <SelectItem value="Teste3">Teste3</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="pt-10">
        <p>Dias de Estudo</p>
        <div>
          <MultiSelector values={value} onValuesChange={setValue} loop={false}>
            <MultiSelectorTrigger>
              <MultiSelectorInput placeholder="" />
            </MultiSelectorTrigger>
            <MultiSelectorContent>
              <MultiSelectorList>
                {options.map((option, i) => (
                  <MultiSelectorItem key={i} value={option.value}>
                    {option.label}
                  </MultiSelectorItem>
                ))}
              </MultiSelectorList>
            </MultiSelectorContent>
          </MultiSelector>
        </div>
      </div>
    </form>
  );
}

export default FormCronograma;
