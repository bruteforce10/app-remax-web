import Image from "next/image";
import React from "react";
import Montserratt from "@/services/FontPremier";

const AboutImg = () => {
  return (
    <>
      <div className="relative w-fit max-lg:scale-105  max-lg:mx-auto max-md:hidden">
        <div className="w-[8.5rem] h-[8.2rem] p-2 bg-[#003DA5] rounded-2xl absolute left-[3px] top-[-5px]  text-white flex flex-col justify-center">
          <Image
            src={"/icon-home.svg"}
            alt="icon-home"
            className="mx-auto"
            width={40}
            height={40}
          />
          <h5
            className={`text-2xl font-extrabold ${Montserratt.className} text-center`}
          >
            125.000
          </h5>
          <p className="text-center leading-[-20px] text-xs">
            rekanan pemasaran tepercaya
          </p>
        </div>

        <Image
          src={"/about-us.webp"}
          alt="about-img"
          width={1000}
          height={100}
          className="w-full h-auto object-contain max-w-[550px] min-w-[550px]"
        />
        <div className="w-[8.5rem] h-[8.2rem] bg-gradient-to-tr right-[0px] bottom-[-6px] rounded-2xl absolute  from-red-remax to-[#F44051] text-white flex flex-col justify-center">
          <Image
            src={"/icon-remax.svg"}
            alt="icon-home"
            className="mx-auto"
            width={30}
            height={30}
          />
          <h5
            className={`text-2xl font-extrabold ${Montserratt.className} text-center`}
          >
            8.300+
          </h5>
          <p className="text-center leading-[-20px] text-xs">
            kantor cabang diberbagai negara
          </p>
        </div>
      </div>
      <Image
        src={"/about-us-mobile.webp"}
        alt="about-img"
        className="w-full h-auto object-contain max-w-[580px] mx-auto max-sm:mt-[-10px] md:hidden"
        width={1000}
        height={100}
      />
    </>
  );
};

export default AboutImg;
