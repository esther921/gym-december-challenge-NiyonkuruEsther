import React from "react";
import Wrapper from "../layout/Wrapper";
import { Button } from "../ui/Button";

export const GivingSection = () => {
  return (
    <Wrapper styles="bg-[#efedfc] mt-24 flex flex-col max-w-[350px] md:w-full justify-center items-center gap-5 py-10 mb-16 text-darkestBlue">
      <h1 className="text-3xl font-bold">Giving</h1>
      <p className="">
        Support research, innovation and teaching at one of the best technical
        universities in Europe. Show social responsibility and help nurture
        talent.
      </p>
      <Button
        children={"SUPPORT US"}
        styles={" flex w-full justify-center"}
        textStyle={"text-white"}
        borderStyle={"border-none bg-lightBlue"}
      />
    </Wrapper>
  );
};
