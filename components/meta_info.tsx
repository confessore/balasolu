import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function MetaInfo(props: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-xl border border-gray-500 bg-pink-200 p-8 opacity-80 dark:bg-pink-900">
      <h1 className="text-center font-semibold">{props.title}</h1>
      <p className="p-8 text-center font-light">{props.description}</p>
    </div>
  );
}
