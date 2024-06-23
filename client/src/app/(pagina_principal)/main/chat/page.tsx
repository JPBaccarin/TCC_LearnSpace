// app/page.tsx -- server component

import Chat from "@/components/chat/chat";

export const runtime = "edge";

import React from "react";

function Chatp() {
  return (
    <div className="p-2 flex items-center justify-center h-full bgsvg bg-background min-h-screen bgsvg text-justify">
      <Chat />
    </div>
  );
}

export default Chatp;
