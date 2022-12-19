import React from "react";

export const NumberTextCard = ({
  styles,
  number,
  paragraph,
  paragraphFontStyle,
  headingFontStyle,
}) => {
  return (
    <div className={` text-white flex  gap-9 h-fit  ${styles}`}>
      <h1 className={` font-bold ${headingFontStyle}`}>{number}</h1>
      <p className={` font-bold ${paragraphFontStyle}`}>{paragraph}</p>
    </div>
  );
};
