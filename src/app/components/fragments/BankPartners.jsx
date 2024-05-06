"use client";
import React, { useEffect } from "react";
import HeadingText from "../elements/HeadingText";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import useSectionView from "@/lib/hook";

const BankPartners = ({ bankPartners }) => {
  const { ref } = useSectionView("WHY RE/MAX");

  return (
    <section ref={ref} className="bg-[#EEF8FE] pt-20">
      <div className="container max-w-[1250px] mx-auto px-8 pb-8 max-sm:text-center whitespace-nowrap">
        <HeadingText text={"RE/MAX"} highlight={"Partner"} />
        <div className="w-20 h-0.5 rounded-full bg-blue-remax max-lg:mx-auto max-lg:mt-2 mx-auto sm:hidden"></div>
      </div>
      <Marquee pauseOnHover={true}>
        {bankPartners.map((item, index) => (
          <div
            key={index}
            className="bg-white w-[150px] h-[120px] rounded-xl flex justify-center items-center cursor-pointer shadow-sm mx-2
            hover:border-blue-remax hover:border-2 transition-all box-border"
          >
            <Image
              src={item?.image?.url}
              alt="bank"
              width={100}
              className="w-full h-full object-contain max-w-[100px]"
              height={100}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default BankPartners;
