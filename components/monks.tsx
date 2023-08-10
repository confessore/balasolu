import React from "react";
import Quote from "./quote";

const monks =
  "There is the story of a Zen Buddhist who took a group of monks into the forest, whereupon the group soon lost their way. Presently one of the monks asked their leader where they were going. The wise man answered, “To the deepest, darkest part of the forest, so that we can all find our way out together.”";
const citation = "(Rudestam & Newton, 1992, p. 3)";

export default function Monks() {
  return <Quote content={monks} author={citation} />;
}
