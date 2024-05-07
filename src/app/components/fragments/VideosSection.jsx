"use client";
import React from "react";
import HeadingText from "../elements/HeadingText";

const VideosSection = () => {
  return (
    <section className="pt-8">
      <div className="container max-w-[1250px] mx-auto text-center space-y-4">
        <h4 className={`uppercase text-xl font-bold underline-costum `}>
          RE/MAX, tak ada tandingan dalam penjualan real estat
        </h4>
        <HeadingText text={"Dengan"} highlight={"#Prestasi Nyata"} />
      </div>
      <div
        className="bg-cover bg-center  p-6 mt-10 mx-auto"
        style={{ backgroundImage: "url('/bg-option.webp')" }}
      >
        <iframe
          width="560"
          height="340"
          className="mx-auto rounded-xl max-md:w-full"
          src="https://www.youtube.com/embed/u-FEUO1PyIE?si=9v4p11bnzzLLF4up"
          title="YouTube video player"
          frameborder="3"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideosSection;
