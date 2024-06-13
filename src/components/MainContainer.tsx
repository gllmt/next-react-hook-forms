export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-w-full min-h-screen flex-col items-center justify-start py-20 px-4 relative overflow-hidden">
      {children}
    </main>
  );
}
