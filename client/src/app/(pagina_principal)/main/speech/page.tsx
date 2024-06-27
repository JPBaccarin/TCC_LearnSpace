import React from "react";
import MainSidebar from "@/components/main/sidebar";
import ConversationChat from "@/components/speech/conversationchat";

function Speaking() {
  return (
    <div className="min-h-screen ">
      <MainSidebar />

      <div className="m-4">
        <ConversationChat />
      </div>
    </div>
  );
}

export default Speaking;
