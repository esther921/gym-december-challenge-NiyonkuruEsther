import Image from "next/image";
import React from "react";
import { DEPERTMENT } from "../../data/department";
import { QUICKLINKS } from "../../data/department";
import { ArrowPointingRight } from "../vectors/ArrowPointingRight";

export default function Footer() {
  return (
    <>
      <footer className=" bg-[#0A2D57]">
        <section className="text-white ">
          <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col xl:flex xl:flex-row xl:justify-between  py-[56px]  border-b border-[#9ABCE4]">
            <div className="flex gap-5">
              <Image
                src="https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Backend/tum-logo.svg"
                alt=""
                className="w-16 h-8"
                width={20}
                height={20}
              />
              <div className="flex flex-col gap-5">
                <p>
                  Technical University of Munich <br /> ArcisstraBe 21 <br />{" "}
                  80333 Munchen
                </p>
                <p>
                  Phone: <span> +49 (0)89-289-01</span> <br />
                  Fax: +49 (0)89-289-22000
                </p>
              </div>
            </div>
            <div>
              <p className="font-bold ">Let{"'"}s shape the future together</p>
              <p>Support us </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-bold">Latest news</p>
              <p className="flex gap-3 items-center">
                <Image
                  src="/assets/images/arrow-right-long-solid.svg"
                  className="w-3 mb-4 h-5"
                  alt="arrow"
                  width={20}
                  height={20}
                />
                Germany{"'"}s strongest university in business sciences
              </p>
              <p className="flex gap-3 items-center">
                <Image
                  src="/assets/Images/arrow-right-long-solid.svg"
                  className="w-3 mb-4 h-5"
                  alt="arrow"
                  width={20}
                  height={20}
                />
                TUM partners with Nobel Sustainability Trust
              </p>
              <p className="flex gap-3 items-center">
                <Image
                  src="/assets/Images/arrow-right-long-solid.svg"
                  className="w-3 mb-4 h-5"
                  alt="arrow"
                  width={20}
                  height={20}
                />
                Antihelium nuclei as messengers from the depths of the galaxy
              </p>
            </div>
          </div>
          <div className="py-[27px]">
            <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col text-white xl:flex xl:flex-row r gap-4 xl:gap-10 ">
              <h1 className="font-bold">
                Schools and <br /> Departments:
              </h1>
              <div className="flex w-full flex-wrap gap-4">
                {DEPERTMENT.map((dpt, index) => {
                  return (
                    <p key={index} className="flex gap-1 items-end">
                      {dpt.departmentName}{" "}
                      <Image
                        src="/assets/Images/arrow-up-right-from-square-solid.svg"
                        className="w-4 h-4"
                        alt="Open"
                        width={20}
                        height={20}
                      />
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="px-6 xl:px-0 xl:mx-auto xl:max-w-[90rem] flex flex-col text-white xl:flex xl:flex-row r gap-4 xl:gap-16 mt-[26px]">
              <h1 className="font-bold">Quicklinks:</h1>
              <div className="flex w-full flex-wrap gap-4">
                {QUICKLINKS.map((links, index) => {
                  return (
                    <p key={index} className="flex gap-1 items-end">
                      {links.link}{" "}
                      <Image
                        src="/assets/Images/arrow-up-right-from-square-solid.svg"
                        alt="Open"
                        width={20}
                        height={20}
                        className="w-4 h-4"
                      />
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0A2D57] text-white py-[26px]">
          <div className="px-6 xl:px-0 xl:max-w-[90rem] xl:mx-auto">
            <div className="xl:flex xl:flex-row  xl:justify-between flex flex-col-reverse gap-6 xl:gap-0 w-full">
              <ul className="flex gap-4 xl:gap-6 flex-wrap">
                <li>Jobs</li>
                <li>Feedback</li>
                <li>Press and Media</li>
                <li>Accessibility</li>
                <li>Privacy Policy</li>
                <li>Legal Notice</li>
              </ul>
              <div className="flex gap-6">
                <Image
                  src={
                    "https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Icons/soc-facebook.svg"
                  }
                  alt="facebook"
                  width={20}
                  height={20}
                />
                <Image
                  src={
                    "https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Icons/soc-youtube.svg"
                  }
                  alt="youtube"
                  width={20}
                  height={20}
                />
                <Image
                  src={
                    "https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Icons/soc-twitter.svg"
                  }
                  alt="twitter"
                  width={20}
                  height={20}
                />
                <Image
                  src={
                    "https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Icons/soc-instagram.svg"
                  }
                  alt="instagram"
                  width={20}
                  height={20}
                />
                <Image
                  src={
                    "https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Icons/soc-linkedin.svg"
                  }
                  alt="linkedin"
                  width={20}
                  height={20}
                />
                <Image
                  src={
                    "https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Icons/rss.svg"
                  }
                  alt="wifi"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <div className="flex gap-8 pt-[27px]">
              <Image
                src={
                  "https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Icons/partners-of-excellence.svg"
                }
                alt="logo"
                width={32}
                height={59.51}
              />
              <div className="flex flex-col gap-4">
                <p>TUM Partners of Excellence</p>
                <p>
                  Airbus · Altana · Audi · Bayerischer Bauindustrieverband · BMW
                  · Bosch · Busch Vacuum · Clariant · Dräxlmaier · Evonik
                  Industries · Google · Herrenknecht · HUAWEI · Infineon · Linde
                  · MAN · Nestlé · Rohde & Schwarz · RWE · SAP · SGL Carbon ·
                  Siemens · TRUMPF · TÜV-Süd · Vereinigung der Bayerischen
                  Wirtschaft · Volkswagen · Wacker Chemie
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
