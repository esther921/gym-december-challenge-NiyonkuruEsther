import React from "react";
import { Button } from "../ui/Button";
import { TMUNewsCard } from "./TMUNewsSectionImages";
import { TMUNEWS } from "../../data/TMUNews";
import Wrapper from "../layout/Wrapper";

export const TMUNewsSection = () => {
  return (
    <Wrapper styles={"text-darkestBlue"}>
      <div className="flex flex-col lg:flex-row mt-16 gap-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">News from TUM</h1>
          <p className="text-xl">
            News, research results and events: everything that enthuses people
            at our university.
          </p>
          <Button borderStyle={"bg-lightBlue"} textStyle={"text-white"}>
            {"SEE ALL"}
          </Button>
        </div>
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-col md:flex-row gap-6">
            {TMUNEWS.slice(0, 2).map((TMUNEWS, index) => (
              <TMUNewsCard key={index} {...TMUNEWS} />
            ))}
          </div>
          <div className="flex flex-col md:flex-row -ml-0 lg:-ml-32 gap-6">
            {TMUNEWS.slice(2).map((TMUNEWS, index) => (
              <TMUNewsCard key={index} {...TMUNEWS} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
