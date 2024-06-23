"use client";

import { Loginform } from "@/components/login/loginform";

import { Toaster } from "@/components/ui/toaster";

export default function login() {
  return (
    <div className=" flex h-screen items-center justify-center">
      <Loginform />
      <Toaster />
    </div>
  );
}
