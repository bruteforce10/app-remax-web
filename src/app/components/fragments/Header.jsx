"use client";
import React, { useEffect } from "react";
import Montserratt from "@/services/FontPremier";
import useSectionView from "@/lib/hook";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowUp } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

const Header = ({ headers }) => {
  const { heading, description, subHeading } = headers[0];

  const subHeadingText = subHeading.slice(0, 30);
  const subHeadingHighlight = subHeading.slice(31, 53);
  const { ref } = useSectionView("HOME");
  const [isShow, setShow] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 768) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

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
        <div className="flex flex-col justify-center items-center gap-4 w-fit max-sm:scale-100 scale-105 origin-bottom ">
          <div className="flex gap-4 justify-center items-end max-lg:hidden">
            <Image
              src={"/img-header.webp"}
              width={500}
              className="w-full h-auto max-w-[230px]  object-contain"
              height={100}
              alt="img-header"
              priority={true}
              quality={100}
            />
            <Swiper
              className="w-[200px]"
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={10}
              pagination={true}
              modules={[Autoplay, Pagination, Navigation]}
              navigation={true}
            >
              <SwiperSlide>
                {" "}
                <div
                  className={` rounded-xl w-[200px] h-[200px] flex flex-col items-center justify-center bg-red-remax text-white ${Montserratt.className} space-y-2`}
                >
                  <h5
                    className={`text-7xl font-extrabold ${Montserratt.className}`}
                  >
                    115+
                  </h5>
                  <p className="text-center leading-[-20px] w-[180px]">
                    Memiliki Cabang Di berbagai negara
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div
                  className={` rounded-xl w-[200px] h-[200px] flex flex-col items-center justify-center bg-blue-remax text-white ${Montserratt.className} space-y-2`}
                >
                  <h5
                    className={`text-7xl font-extrabold ${Montserratt.className}`}
                  >
                    50+
                  </h5>
                  <p className="text-center leading-[-20px] w-[180px]">
                    Tahun Berpengalaman
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <Image
            src={"/img-header-second.webp"}
            width={500}
            className="w-full h-auto max-w-[450px] max-lg:max-w-[550px]  object-contain"
            height={100}
            alt="img-header"
            priority={true}
            quality={100}
          />
        </div>
      </div>
      <div
        onClick={() => {
          {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
              duration: 500,
            });
          }
        }}
        style={{ display: isShow ? "block" : "none" }}
        className="fixed bottom-28 z-[99] right-16 max-sm:right-8 cursor-pointer  bg-[#ffffff] p-4 rounded-full shadow-md"
      >
        <FaArrowUp size={24} className="text-gray-700" />
      </div>
    </header>
  );
};

export default Header;
