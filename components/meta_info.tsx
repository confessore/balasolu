import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function MetaInfo(props: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-center border border-gray-500 bg-pink-200 p-3 opacity-90 dark:bg-pink-800">
      <h1 className="text-center font-semibold">{props.title}</h1>
      <p className="p-3 text-center font-light">{props.description}</p>
    </div>
  );
}
