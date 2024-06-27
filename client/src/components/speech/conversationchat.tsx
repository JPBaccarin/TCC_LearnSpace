import React from "react";
import { Bot, BrainCog, MicOffIcon } from "lucide-react";
import { Mic } from "lucide-react";
import Image from "next/image";
import faviconlogo from "@/app/favicon.ico";
import { Button } from "../ui/button";

function ConversationChat() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="flex flex-row justify-between gap-4 w-full  rounded-md border p-4">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-secondary p-4">
            <Image
              src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
              width={108}
              height={108}
              alt="Disable Microphone"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <Button className=" border bg-secondary ">apertar pra falar</Button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-primary p-4">
            <Image
              src={faviconlogo}
              width={108}
              height={108}
              alt="Disable Microphone"
            />
          </div>
          <div className="items my-2 flex flex-row gap-2">
            <p className="">LearnSpaceAI</p>
            <Bot height={24} />
          </div>
        </div>
      </div>

      <div className="w-full max-w-md rounded-lg bg-gray-800 p-4">
        <div className="mb-2 text-xl font-bold">Feedback</div>
        <div className="flex items-center space-x-2">
          <div className="text-red-500">
            Tente Melhorar a Pronúncia envolvendo palavras com a letra "R"
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationChat;
