import React from "react";
import Wrapper from "../layout/Wrapper";
import { CARDWITHTEXTDATA } from "../../data/cardWithTextData";
import { CardWithText } from "../ui/CardWithText";
import { NumberTextCard } from "../ui/NumberTextCard";
import Image from "next/image";

export const CardWithTextSection = () => {
  return (
    <Wrapper styles={"mt-24 mb-24 text-darkestBlue"}>
      <div className="flex flex-col gap-24">
        {CARDWITHTEXTDATA.map((items, i) => {
          const { src, heading, paragraph, button } = items;
          {
            if (i == 1) {
              return (
                <div className="text flex flex-col gap-12">
                  <div className="text-3xl font-semibold text-darkestBlue ">
                    TUM in numbers
                  </div>
                  <div className="grid md:grid-cols-5 gap-3">
                    <NumberTextCard
                      number={"50,000"}
                      paragraph={"Students"}
                      styles={
                        "col-span-3 bg-lightBlue flex-col py-3 md:py-10 pl-12 -space-y-6 md:pb-16 w-[350px] md:w-full items-center"
                      }
                      headingFontStyle={"text-7xl md:text-9xl"}
                      paragraphFontStyle={"text-3xl"}
                    />
                    <div className="col-span-2 grid grid-rows-2 gap-3.5">
                      <NumberTextCard
                        number={"176"}
                        paragraph={"ERC Grants for cutting-edge research"}
                        styles={
                          "bg-[#f7b11e] px-5 md:pt-4 pb-3 md:pb-5 md:gap-24 md:ml-6 text-darkestBlue gap-6 md:flex-row flex-col w-[350px] md:w-full items-center"
                        }
                        headingFontStyle={"text-7xl mt-6"}
                        paragraphFontStyle={
                          "text-xl md:mt-[40px] flex w-full justify-center items-center"
                        }
                      />
                      <NumberTextCard
                        styles={
                          "bg-[#b55ca5] px-5 md:pt-4 pb-3 md:pb-5 md:flex-row flex-col md:ml-6 gap-3 md:gap-36 text-darkestBlue w-[350px] md:w-full items-center"
                        }
                        number={"18"}
                        paragraph={"Nobel laureates"}
                        headingFontStyle={"text-7xl mt-6"}
                        paragraphFontStyle={"text-xl md:mt-[69px]"}
                      />
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className={`flex flex-col xl:flex md:relative ${
                    i % 2 === 0 ? " " : "md:flex-row-reverse"
                  }`}
                >
                  <Image
                    src={src}
                    alt={""}
                    height={"256"}
                    width={"342"}
                    className={"xl:w-[784px] xl:h-[479px]"}
                  />
                  <CardWithText
                    key={i}
                    heading={heading}
                    paragraph={paragraph}
                    btnStyles={" w-fit bg-white mt-3"}
                    borderStyle={" border-none"}
                    cardStyles={` w-[343px] md:w-[688px] h-[335px] md:absolute flex flex-col gap-4 px-12 py-12 ${
                      i === 0 ? " bg-lightBlue  right-0 top-[15%]" : ""
                    } ${i === 2 ? " bg-[#8F81EA] right-0 top-[15%] " : ""}
                    ${i === 3 ? " bg-[#ea7237] left-0 top-[15%]" : ""}`}
                  >
                    {button.toUpperCase()}
                  </CardWithText>
                </div>
              );
            }
          }
        })}
      </div>
    </Wrapper>
  );
};
