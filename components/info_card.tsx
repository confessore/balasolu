import React from "react";

const info_card = "p-5 bg-pink-200 text-pink-900 rounded-xl";
const info_card_dark = "dark:bg-pink-900 dark:text-pink-200";
const h2 = "font-[600] pb-2 opacity-60 text-2xl";
const p = "font-serif text-md max-w-[90ch] py-2";

type Props = {
  header?: string;
  content?: string[];
};

const InfoCard = (props: Props) => {
  return (
    <>
      <div className={`${info_card} ${info_card_dark}`}>
        <h2 className={h2}>{props.header}</h2>
        {props.content?.map((item, index) => (
          <p key={index} className={p}>
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default InfoCard;
