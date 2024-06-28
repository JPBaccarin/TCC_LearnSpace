'use client'
import React, { useState } from "react";
import Title from "./title";
import { Switch } from "../ui/switch";
import { Slider } from "../ui/slider";
import { Value } from "@radix-ui/react-select";

const options = [
    { label: "Português"},
    { label: "Matemática"},
    { label: "Física"},
    { label: "História"},
    { label: "Geografia"},
    { label: "Biologia"},
    { label: "Química"},
];

function FormDisciplina() {
    const [sliderValues, setSliderValues] = useState(Array(options.length).fill(1));

    const handleSliderChange = (value: any, index:any ) => {
        const newSliderValues = [...sliderValues];
        newSliderValues[index] = value[0];
        setSliderValues(newSliderValues);
    };

    const getDifficultyLabel = (value: any ) => {
        switch(value) {
            case 0:
                return "Fácil";
            case 1:
                return "Médio";
            case 2:
                return "Difícil";
            default:
                return "";
        }
    };

    return(
        <form className="mb-4 rounded border-l bg-accent border-primary px-8 pb-8 pt-6 shadow-md">
            <div className="">
                <Title name="Disciplinas" />
            </div>
            <div>
                <div className="bg-background rounded-md">
                    {options.map((option, i) => (
                    <div key={i} className="grid grid-cols-3 justify-center items-center text-center py-5 border-y-[1px]">
                        {option.label}
                        <div><Switch /></div>
                        <div className="flex justify-center items-center flex-col gap-3">
                            <Slider
                                defaultValue={[1]}
                                max={2}
                                step={1}
                                className="w-1/5"
                                onValueChange={(value) => handleSliderChange(value, i)}
                            />
                            <p className="ml-2">{getDifficultyLabel(sliderValues[i])}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </form>
    );
}

export default FormDisciplina;
