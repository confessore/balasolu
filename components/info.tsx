import React from "react";

type Props = {
  description: string;
};

export default function Info(props: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-center p-3">
      <p className="p-3 text-center font-light">{props.description}</p>
    </div>
  );
}
