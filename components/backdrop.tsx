import React from "react";

export default function Backdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="items-between mx-auto flex h-full w-full max-w-2xl flex-col flex-wrap justify-between bg-slate-200 p-8 px-4 opacity-90 dark:bg-slate-900">
      {children}
    </div>
  );
}
