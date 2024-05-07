"use client";
import React from "react";
import Montserratt from "@/services/FontPremier";
// import ImgHeader from "../elements/ImgHeader";
import useSectionView from "@/lib/hook";
import ImgHeader from "../elements/ImgHeader";

const Header = ({ headers }) => {
  const { heading, description, subHeading } = headers[0];

  const subHeadingText = subHeading.slice(0, 30);
  const subHeadingHighlight = subHeading.slice(31, 53);
  const { ref } = useSectionView("HOME");

  return (
    <header
      id="HOME"
      className="max-lg:bg-gradient-to-b from-[#EEF8FE] to-white bg-[#EEF8FE] scroll-mt-28"
    >
      <div
        ref={ref}
        className="container px-8 mx-auto py-20 max-md:py-14 max-w-[1250px] items-center grid grid-cols-1 gap-y-12 max-lg:justify-items-center lg:grid-cols-2 justify-items-end "
      >
        <div className="space-y-8 max-lg:text-center">
          <h1
            className={`${Montserratt.className}  max-sm:text-5xl text-6xl md:text-7xl font-bold bg-gradient-to-tr from-blue-remax to-[#3f63a2] bg-clip-text text-transparent py-2`}
          >
            {heading}
          </h1>
          <h3 className={`${Montserratt.className} text-2xl max-md:text-xl`}>
            {subHeadingText} <br />
            <span className="font-bold ">{subHeadingHighlight}</span>{" "}
          </h3>
          <div
            className="max-w-xl text-lg max-md:text-md mx-auto "
            dangerouslySetInnerHTML={{ __html: description?.html }}
          ></div>
        </div>
        <ImgHeader />
      </div>
    </header>
  );
};

export default Header;
