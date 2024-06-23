"use client";
import { Cadform } from "@/components/login/cadastro/cadform";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

export default function login() {
  return (
    <div className=" flex h-screen items-center justify-center">
      <Cadform />
      <Toaster />

    </div>
  );
}
