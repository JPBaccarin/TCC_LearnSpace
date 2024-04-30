import React from "react";
import { CirclePlus } from "lucide-react";
function page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <button className="absolute bottom-8 right-8 rounded-full bg-primary p-2 text-white duration-100 hover:scale-125 dark:bg-primary">
        <CirclePlus className="  h-6 w-6" />
      </button>
    </div>
  );
}

export default page;
