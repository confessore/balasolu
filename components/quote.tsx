import React from "react";

type Props = {
  content: string;
  author: string;
};

export default function Quote(props: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-center border border-gray-500 bg-pink-200 p-3 opacity-90 dark:bg-pink-800">
      <p className="text-md text-center font-light italic">{props.content}</p>
      <p className="text-md text-center font-semibold">{props.author}</p>
    </div>
  );
}
