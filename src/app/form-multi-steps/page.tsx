import FormWithMultiSteps from "@/components/FormWithMultiSteps";
import { NavHome } from "@/components/NavHome";
import React from "react";

export default function PageFormMultiSteps() {
  return (
    <main className="flex min-w-full min-h-screen flex-col items-center justify-start py-20 px-4 relative overflow-hidden">
      <NavHome />
      <h1 className="text-4xl font-bold text-balance text-center">
        Form With Multi Steps
      </h1>
      <FormWithMultiSteps />
    </main>
  );
}
