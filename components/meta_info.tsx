import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function MetaInfo(props: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-centerp-3">
      <h1 className="text-center font-semibold">{props.title}</h1>
      <p className="p-3 text-center font-light">{props.description}</p>
    </div>
  );
}
