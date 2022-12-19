import React from "react";
import Image from "next/image";
import { Button } from "./Button";

export const CardWithImage = ({
  src,
  heading,
  paragraph,
  imgStyles,
  cardStyles,
  children,
  width,
  height,
}) => {
  return (
    <div className={`flex flex-col gap-6 ${cardStyles}`}>
      <Image
        src={src}
        alt=""
        className={imgStyles}
        width={width}
        height={height}
      />
      <div className="flex flex-col md:w-full gap-6">
        <h1 className="text-2xl font-semibold group-hover:text-lightBlue">
          {heading}
        </h1>
        <p className="group-hover:text-lightBlue font-medium text-base">
          {paragraph}
        </p>
        <Button>{children}</Button>
      </div>
    </div>
  );
};
