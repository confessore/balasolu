import React from "react";

type Props = {
    content: string;
    author: string;
}

export default function Quote(props: Props) {
  return (
    <div className="flex flex-col w-full justify-center items-center p-8">
      <p className="italic font-light text-md text-center">{props.content}</p>
      <p className="font-semibold text-md text-center">{props.author}</p>
    </div>
  );
};
