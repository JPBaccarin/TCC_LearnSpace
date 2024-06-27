import React from "react";
import MainSidebar from "@/components/main/sidebar";
import Chat from "@/components/speech/conversationchat";

function Speaking() {
  return (
    <div className="min-h-screen ">
      <MainSidebar />

      <div className="m-4">
        <Chat />
      </div>
    </div>
  );
}

export default Speaking;
