import React, { Children } from "react";
import Image from "next/image";
import Button from "./Button";

export default function CardWithImage({
  src,
  heading,
  paragraph,
  imgStyles,
  cardStyles,
  children,
  width,
  height,
}) {
  return (
    <div className={cardStyles}>
      <Image
        src={src}
        alt=""
        className={imgStyles}
        width={width}
        height={height}
      />
      <h1 className="">{heading}</h1>
      <p className="">{paragraph}</p>
      <Button>{children}</Button>
    </div>
  );
}
