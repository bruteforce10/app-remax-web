import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Montserratt from "@/services/FontPremier";

import "swiper/css";
import "swiper/css/pagination";

export const InfoHeader = () => {
  return (
    <>
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
            <h5 className={`text-7xl font-extrabold ${Montserratt.className}`}>
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
            <h5 className={`text-7xl font-extrabold ${Montserratt.className}`}>
              50+
            </h5>
            <p className="text-center leading-[-20px] w-[180px]">
              Tahun Berpengalaman
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
