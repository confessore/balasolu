import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function MetaInfo(props: Props) {
  return (
    <div className="justify-centerp-3 flex w-full flex-col items-center">
      <h1 className="text-center font-semibold">{props.title}</h1>
      <p className="p-3 text-center font-light">{props.description}</p>
    </div>
  );
}
