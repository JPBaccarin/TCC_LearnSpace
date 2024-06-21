import React, { ChangeEvent, useRef } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FaTimes } from "react-icons/fa";

function GetImage() {
  interface ImagemState {
    imagem: File | null;
    imagemUrl: string | null;
  }

  const inputRef = useRef<HTMLInputElement>(null);

  const [imagemState, setImagemState] = React.useState<ImagemState>({
    imagem: null,
    imagemUrl: null,
  });

  const removerImagem = () => {
    setImagemState({
      imagem: null,
      imagemUrl: null,
    });

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleImagemSelecionada = (event: ChangeEvent<HTMLInputElement>) => {
    const imagemSelecionada = event.target.files?.[0];
    if (imagemSelecionada) {
      setImagemState({
        imagem: imagemSelecionada,
        imagemUrl: URL.createObjectURL(imagemSelecionada),
      });
    }
  };

  return (
    <div className="flex w-1/2 flex-col items-center justify-center gap-2">
      <AspectRatio
        ratio={16 / 9}
        className="flex items-center justify-center rounded-lg bg-muted"
      >
        {imagemState.imagemUrl ? (
          <>
            <img
              src={imagemState.imagemUrl}
              alt="Imagem selecionada"
              className="h-full w-full object-cover"
            />
            <button
              className="absolute right-2 top-2 rounded-full bg-white p-1 text-gray-600 transition duration-300 hover:bg-red-100 hover:text-red-500"
              onClick={removerImagem}
            >
              <FaTimes />
            </button>
          </>
        ) : (
          <span>Selecione uma imagem</span>
        )}
      </AspectRatio>
      <label
        htmlFor="picture"
        className="text-md block w-max cursor-pointer rounded-md border-2 px-4 py-2 font-semibold duration-500 hover:scale-105 dark:border-slate-100 "
      >
        Escolher Imagem
      </label>
      <input
        ref={inputRef}
        id="picture"
        type="file"
        accept="image/*"
        onChange={handleImagemSelecionada}
        className="hidden"
      />
    </div>
  );
}

export default GetImage;
