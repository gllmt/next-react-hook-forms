import FormWithReactHookForm from "@/components/FormWithReactHookForm";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function PageFormWithReactHookForm() {
  return (
    <main className="flex min-w-full min-h-screen flex-col items-center justify-start py-20 px-4 relative overflow-hidden">
      <nav className="absolute top-5 left-10">
        <Link
          href="/"
          className="group flex items-center justify-center gap-2 h-[2.5rem] w-[7rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        >
          <FaArrowLeft className="text-xs opacity-70 transition-all group-hover:-translate-x-1" />{" "}
          Home
        </Link>
      </nav>
      <h1 className="text-4xl font-bold text-balance text-center">
        Form With React Hook Form
      </h1>
      <FormWithReactHookForm />
    </main>
  );
}
