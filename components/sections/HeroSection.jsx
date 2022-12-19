import React from "react";
import Image from "next/image";
import Wrapper from "../layout/Wrapper";

export const HeroSection = () => {
  return (
    <div className="relative">
      <div className="absolute bottom-[50%] text-white left-56">
        <h1 className="text-5xl font-bold pb-6">
          TUM. The Entrepreneurial
          <br />
          University
        </h1>
        <p className="text-xl">
          Innovation through talent, excellence and responsibility
        </p>
      </div>
      <Image
        src={
          "https://media.discordapp.net/attachments/1031839002799644716/1054397713506107462/image.png?width=1199&height=616"
        }
        className={"w-full -mt-48"}
        alt={""}
        width={500}
        height={500}
      />
    </div>
  );
};
