import React from "react";
import { Button } from "./Button";

export default CardWithText = ({
  heading,
  paragraph,
  btnStyles,
  cardStyles,
}) => {
  <div className={cardStyles}>
    {heading}
    {paragraph}
    <Button styles={btnStyles}></Button>
  </div>;
};
