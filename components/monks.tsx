import React from "react";

const monks =
  "There is the story of a Zen Buddhist who took a group of monks into the forest, whereupon the group soon lost their way. Presently one of the monks asked their leader where they were going. The wise man answered, “To the deepest, darkest part of the forest, so that we can all find our way out together.”";
const citation = "(Rudestam & Newton, 1992, p. 3)";

const Monks = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center p-12">
      <p className="italic font-light text-md text-center">{monks}</p>
      <p className="font-semibold text-md text-center">{citation}</p>
    </div>
  );
};

export default Monks;
