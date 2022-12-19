import React from "react";

export const Button = ({ styles, children, borderStyle }) => {
  return (
    <div className={`w-full flex ${styles}`}>
      <div
        className={`border border-lightBlue hover:border-darkBlue text-lightBlue hover:text-darkBlue px-4 py-4 text-base font-semibold ${borderStyle}`}
      >
        {children}
      </div>
    </div>
  );
};
