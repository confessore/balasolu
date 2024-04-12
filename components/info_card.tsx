"use client";
import React, { useState } from "react";

type Props = {
  title?: string;
  content?: string[];
  hidden?: boolean;
};

export default function InfoCard(props: Props) {
  return (
    <div className="w-full p-3">
      {props.content?.map((item, index) => (
        <div key={index} className="flex w-full items-center justify-center">
          <p className="text-md w-full max-w-[90ch] py-2 font-serif">{item}</p>
        </div>
      ))}
    </div>
  );
}
