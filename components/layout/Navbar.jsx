import React from "react";
import { NAVLINKS } from "../../data/footerAndNavbarData";

export const Navbar = () => {
  return (
    <div className="grid bg-darkestBlue lg:bg-mediumDarkBlue mb-12 h-20">
      <div className=""></div>
      <ul className="flex font-bold gap-11 text-base text-white bg-red-300">
        {NAVLINKS.map((items, i) => {
          return <li key={i}>{items}</li>;
        })}
      </ul>
    </div>
  );
};
