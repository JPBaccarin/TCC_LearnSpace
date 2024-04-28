// app/page.tsx -- server component
"use client"

import {Loginform} from "@/components/login/login";


import React from "react";

function page() {
  return (
    <div className=" items-center flex justify-center">
      <Loginform />
    </div>
  );
}

export default page;
