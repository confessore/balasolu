import Image from "next/image";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between gap-3 py-10 text-pink-900 opacity-90 dark:text-pink-200 lg:py-0 lg:pb-10">
      <div className="fixed inset-0 -z-10 h-[100vh] w-[100vw]">
        <Image
          src={"/jwt.avif"}
          alt={"jwt"}
          fill
          style={{objectFit: "cover"}}
          priority
        />
      </div>
      {children}
    </main>
  );
}
