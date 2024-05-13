"use client";
import { useEffect, useState } from "react";
import HeadingText from "../elements/HeadingText";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import Image from "next/image";
import { IoDocumentTextOutline } from "react-icons/io5";
import Button from "../elements/Button";
import CardWhyMe from "../elements/CardWhyMe";

const WhyMeSection = ({ whyMes }) => {
  const [number, setNumber] = useState(6);
  const [windowWidth, setWindowWidth] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const isLandscape = window.innerWidth > window.innerHeight;
        setWindowWidth(window.innerWidth);
        setNumber(isLandscape ? 6 : 3);
        setShow(isLandscape ? false : true);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const sortedWhyMes = whyMes.sort(
    (a, b) => Number(a.number) - Number(b.number)
  );

  return (
    <section id="whyMe" className="bg-[#EEF8FE] py-20 relative overflow-hidden">
      <Image
        src="/remax-balon.webp"
        alt="remax-balon"
        width={500}
        height={200}
        className="absolute w-full h-auto min-w-28 max-w-44 max-sm:max-w-8 max-sm:-right-7 -right-2 top-12"
      />
      <div className="container max-w-[1250px] mx-auto">
        <div className="text-center space-y-3">
          <HeadingText text={"Mengapa"} highlight={"Kita"} />
          <div className="w-20 h-0.5 rounded-full bg-blue-remax max-lg:mx-auto max-lg:mt-2 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-4 justify-center">
          {sortedWhyMes.map(
            (item, index) =>
              index < number && (
                <CardWhyMe
                  key={index}
                  {...item}
                  backgroundColor={
                    windowWidth <= 986
                      ? "#245EC2"
                      : index === 1 || index === 2 || index === 5
                      ? "#245EC2"
                      : "#A4D7F4"
                  }
                  textColor={
                    windowWidth <= 986
                      ? "#fff"
                      : index === 1 || index === 2 || index === 5
                      ? "white"
                      : "#007DC3"
                  }
                />
              )
          )}
        </div>
        {show && (
          <button
            className="underline text-xl underline-offset-2 text-[#030303] font-medium mx-auto w-full mt-4"
            onClick={() => setNumber(whyMes.length === number ? 3 : 6)}
          >
            <span>{whyMes.length === number ? "Tutup" : "Lihat Semua"}</span>
            {whyMes.length === number ? (
              <FaArrowUp className="inline-block ml-1" />
            ) : (
              <FaArrowDown className="inline-block ml-1" />
            )}
          </button>
        )}
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-center text-lg max-sm:text-sm leading-relaxed opacity-75">
            dapat mengunduh business proposal lengkap kami melalui dibawah ini{" "}
          </p>
          <Button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1tUADYTIdXTA9Zw2yBN_LhMDCgszqADsp/view?usp=sharing"
              )
            }
          >
            <span>Business Proposal</span>
            <IoDocumentTextOutline className="inline-block ml-2 text-lg" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
