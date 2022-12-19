import React from "react";

export const Button = ({ styles, children, borderStyle, textStyle }) => {
  return (
    <div className={`w-full flex ${styles}`}>
      <div
        className={`border border-lightBlue hover:border-darkBlue hover:text-darkBlue px-4 py-4 text-base font-semibold ${borderStyle} ${textStyle} ${
          textStyle == "text-white" ? "text-white" : "text-lightBlue"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
