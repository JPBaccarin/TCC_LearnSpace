import React from "react";
import { Bot, BrainCog, MicOffIcon, Mic, AudioLines, Headset } from "lucide-react";
import Image from "next/image";
import faviconlogo from "@/app/favicon.ico";
import { Button } from "../ui/button";


function ConversationChat() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background bgsvg px-96">
      <div className="flex flew-row items-center absolute  top-0  py-24    ">
        <div className="text-red-500">
          <Headset
          width={108}
          height={108} />
        </div>
        <h1 className= "text-6xl">Speaking and Listening</h1>  
      </div>
        <div className="flex flex-row justify-between gap-4 w-full  rounded-lg border p-4 bg-background">
        <div className="flex flex-col items-center">
          <div className="items my-2 flex flex-row gap-2 m-2">
            <p className="">User</p>
          </div>
          <div className="rounded-full bg-secondary p-4 ">
            <Image
              src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
              width={108}
              height={108}
              alt="Disable Microphone"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-row items-center">
            <Button className=" border bg-background m-2">Apertar pra falar</Button>
            <Mic />
          </div>
        </div>
            
        <div className="flex flex-row items-center justify-center">
          
        <AudioLines 
          width={108}
          height={108} 
          />
          <AudioLines 
          width={108}
          height={108} 
          />
          <AudioLines 
          width={108}
          height={108} 
          />           
        </div>        

        <div className="flex flex-col items-center">
          <div className="items my-2 flex flex-row gap-2 m-2">
            <p className="">LearnSpaceAI</p>
            <Bot height={24} />
          </div>
          <div className="rounded-full bg-primary p-4">
            <Image
              src={faviconlogo}
              width={108}
              height={108}
              alt="Disable Microphone"
            />
          </div>
          <div className="flex flex-row items-center">
            <Button className=" border bg-background m-2">Parar tradução</Button>
            <MicOffIcon stroke="red"/>
          </div>
        </div>
      </div>

      <div className="w-full rounded-lg bg-gray-800 p-4 m-4 ">
        <div className="mb-2 text-xl font-bold ">Feedback</div>
        <div className="flex items-center space-x-2 m-2 p-2">
        <Image
              src={faviconlogo}
              width={48}
              height={48}
              alt="Disable Microphone"
            />
          <div className="text-white-500 flex flex-row items-center">
            Tente Melhorar a Pronúncia envolvendo palavras com a letra "R" 
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationChat;
