"use client";
import Montserratt from "@/services/FontPremier";
import React from "react";
import CardAction from "../elements/CardAction";
import Image from "next/image";
import useSectionView from "@/lib/hook";

const ActionSection = ({ topNavigations }) => {
  const { ref } = useSectionView("CONTACT");

  return (
    <section
      id="CONTACT"
      ref={ref}
      className="py-16 scroll-mt-[450px] relative  bg-gradient-to-b overflow-hidden from-[#0E54A1] to-[#245EC1]"
    >
      <Image
        src="/globe.webp"
        alt="globe remax"
        width={900}
        className="w-full absolute botttom-0  object-contain"
        height={100}
      />
      <div className="container max-w-[1250px] space-y-12 mx-auto flex flex-col justify-center ">
        <h2
          className={`${Montserratt.className} text-4xl font-bold text-center text-white`}
        >
          Jangan lewatkan kesempatan ini!
        </h2>
        <CardAction call={topNavigations[0]?.text} />
      </div>
    </section>
  );
};

export default ActionSection;
