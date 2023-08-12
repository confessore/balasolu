export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between gap-3 bg-[url('/jwt.webp')] py-10 text-pink-900 opacity-90 dark:text-pink-200">
      {children}
    </main>
  );
}
