import React from "react";
import { NAVLINKS } from "../../data/footerAndNavbarData";
import { SearchIcon } from "../vectors/SearchIcon";
import { TUMLogoSvg } from "../vectors/TUMLogoSvg";
import { TUMSvg } from "../vectors/TUMSvg";
import Wrapper from "./Wrapper";

export const Navbar = () => {
  return (
    <div className=" w-full fixed z-[1000] top-0 bg-darkestBlue lg:bg-darkestBlue  text-white">
      <Wrapper styles={"grid grid-cols-7 h-20 px-0"}>
        <div className="flex my-auto gap-3 ml-6 col-span-2">
          <div className="flex my-auto gap-4">
            <TUMLogoSvg fill={"white"} styles="my-auto max-h-44" />
            <TUMSvg fill={"white"} />
          </div>

          <p className="text-white leading-none text-sm font-extralight hidden xl:inline-grid">
            Technical <br />
            University <br />
            of Munich
          </p>
        </div>

        <div className="flex w-full col-span-5 gap-12 justify-center">
          <ul className="xl:flex font-bold gap-6 text-sm justify-end my-auto hidden ">
            {NAVLINKS.map((items, i) => {
              return (
                <li key={i} className="tracking-tighter">
                  {items}
                </li>
              );
            })}
          </ul>
          <div className="text-base flex font-bold my-auto gap-4">
            <div className=" flex gap-1.5">
              <p className="flex gap-1.5 text-slate-400">
                DE <span className="border"></span>
              </p>
              <p className="">EN</p>
            </div>
            <SearchIcon />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
