"use client";
import React, { useState } from "react";

const info_card = "p-5 bg-pink-200 text-pink-900 rounded-xl";
const info_card_dark = "dark:bg-pink-900 dark:text-pink-200";
const h2 = "font-[600] pb-2 opacity-60 text-2xl";
const p = "font-serif text-md max-w-[90ch] py-2";

type Props = {
  title?: string;
  content?: string[];
  hidden?: boolean;
};

export default function InfoCard(props: Props) {
  const [hidden, setHidden] = useState(props.hidden);

  return (
    <div className={`${info_card} ${info_card_dark}`}>
      <h2
        className={h2}
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        {props.title} (Click to Show/Hide)
      </h2>
      {!hidden &&
        props.content?.map((item, index) => (
          <p key={index} className={p}>
            {item}
          </p>
        ))}
    </div>
  );
}
