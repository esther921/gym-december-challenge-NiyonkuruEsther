import React from "react";
import { CardWithImage } from "../ui/CardWithImage";
import { CARDWITHIMAGESDATA } from "../../data/cardWithImageData";
import Wrapper from "../layout/Wrapper";

export default function CardWithImageSection() {
  return (
    <Wrapper>
      {/* mobile */}
      <div className="flex flex-col gap-12 overflow-hidden md:grid ipad:grid-cols-3 ipad:gap-x-40 ipad:gap-y-12 text-darkestBlue">
        {CARDWITHIMAGESDATA.map((items, i) => {
          const { src, heading, paragraph, button } = items;
          return (
            <CardWithImage
              key={i}
              src={src}
              heading={heading}
              paragraph={paragraph}
              imgStyles={`min-w-[342px] ipad:w-full max-h-[180px]  min-h-[256px]  ${
                i == 0 || 2
                  ? "scale-x-150  md:scale-x-100"
                  : " scale-x-95 md:scale-x-100"
              }`}
              height={"256"}
              width={"342"}
              cardStyles={`group ${i == 0 ? " md:col-span-2 " : ""}`}
            >
              {button}
            </CardWithImage>
          );
        })}
      </div>
    </Wrapper>
  );
}
