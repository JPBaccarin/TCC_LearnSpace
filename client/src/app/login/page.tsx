// app/page.tsx -- server component
"use client"

import {Loginform} from "@/components/login/login";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


import React, { SyntheticEvent, useState } from "react";


export default function login() {
  
  return (
    <div className=" items-center flex justify-center">
      <Loginform />
    </div>
  );''
}


