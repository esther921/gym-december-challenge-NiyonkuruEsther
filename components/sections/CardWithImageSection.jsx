import React from "react";
import CardWithImage from "../ui/CardWithImage";
import { CARDWITHIMAGESDATA } from "../../data/cardWithImageData";
import Wrapper from "../layout/Wrapper";

export default function CardWithImageSection() {
  return (
    <Wrapper>
      <div>
        {CARDWITHIMAGESDATA.map((items, i) => {
          const { src, heading, paragraph, button } = items;
          return (
            <CardWithImage
              key={i}
              src={src}
              heading={heading}
              paragraph={paragraph}
              children={button}
              imgStyles={""}
              height={"500"}
              width={"500"}
              // cardStyles={}
              // imgStyles={}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}
