import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-w-full min-h-screen flex-col items-center justify-start py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        Multiple way to implement forms in Next.js
      </h1>
      <nav className="flex flex-col gap-4">
        <Link
          href="/form-without-react-hook-form"
          className="px-6 py-3 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 text-center"
        >
          Form Without React Hook Form
        </Link>
        <Link
          href="/form-with-react-hook-form"
          className="px-6 py-3 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 text-center"
        >
          Form With React Hook Form
        </Link>
        <Link
          href="/form-with-rhf-zod"
          className="px-6 py-3 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 text-center"
        >
          Form With React Hook Form and Zod
        </Link>
        <Link
          href="/form-with-rhf-zod-server"
          className="px-6 py-3 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 text-center"
        >
          Form With React Hook Form and Zod Server
        </Link>
      </nav>
    </main>
  );
}
