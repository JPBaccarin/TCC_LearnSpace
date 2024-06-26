import React from "react";
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
import MultiSelector, { Option } from "../ui/multi-selector";

function FormCronograma() {
  return (
    <form className="mb-4 grid w-[1000px] grid-cols-2 gap-8 rounded bg-accent px-8 pb-8 pt-6 shadow-md">
      <div className="">
        <Title name="Informações do Plano" />
        <div className=" ">
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
        
      </div>
    </form>
  );
}



const OPTIONS: Option[] = [
  { label: 'nextjs', value: 'Nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Remix', value: 'remix' },
  { label: 'Vite', value: 'vite' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular' },
  { label: 'Ember', value: 'ember', disable: true },
  { label: 'Gatsby', value: 'gatsby', disable: true },
  { label: 'Astro', value: 'astro' },
];

    <div className="w-full px-10">
      <MultiSelector
        value={OPTIONS.slice(0, 3)}
        defaultOptions={OPTIONS}
        disabled
        hidePlaceholderWhenSelected
        placeholder="Select frameworks you like..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
      />
    </div>

export default FormCronograma;
