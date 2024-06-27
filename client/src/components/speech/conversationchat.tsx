import React from "react";
import { BrainCog } from "lucide-react";
import { Mic } from "lucide-react";
import Image from "next/image";
function Chat() {
  return (
    <div className="flex justify-center ">
      <div className="h-screen w-3/4 rounded-lg bg-gray-700 shadow-md">
        <div className="flex justify-center rounded bg-gray-600 p-4  text-2xl font-bold">
          <h1>Chat de conversação</h1>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="m-1 flex flex-row items-center gap-2 p-2">
            <Image
              src="/favicon.ico"
              width="48"
              height="48"
              alt=""
              className="rounded-full"
            />
            <p className="rounded bg-gray-500 p-2">Hello, how are you?</p>
          </div>

          <div className="m-1 flex flex-row items-center justify-end gap-2 p-2">
            <p className="rounded bg-blue-500 p-2 text-white">
              I'm good, thanks!
            </p>
            <Image
              src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
              width="48"
              height="48"
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="flex justify-start">
            <div className="m-1 flex flex-row items-center gap-2 p-2">
              <Image
                src="/favicon.ico"
                width="48"
                height="48"
                alt=""
                className="rounded-full"
              />
              <p className="rounded bg-gray-500 p-2">What's up?</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-4 p-2 ">
          <div className="flex justify-center rounded-full bg-blue-500 p-4">
            <Mic />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
