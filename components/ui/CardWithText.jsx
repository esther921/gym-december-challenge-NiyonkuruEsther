import React from "react";
import { Button } from "./Button";

export const CardWithText = ({
  heading,
  paragraph,
  btnStyles,
  cardStyles,
  children,
  borderStyle,
}) => {
  return (
    <div className={`${cardStyles} text-white`}>
      <h1 className="text-2xl font-semibold">{heading}</h1>
      <p> {paragraph}</p>
      <Button styles={btnStyles} borderStyle={borderStyle}>
        {children}
      </Button>
    </div>
  );
};
