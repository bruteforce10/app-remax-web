"use client";
import React, { useEffect, useState } from "react";
import HeadingText from "../elements/HeadingText";
import Image from "next/image";
import Testimonial from "../elements/Testimonial";
import { MyContext } from "@/lib/AppContext";

const TestimonialSection = ({ testimonis }) => {
  const { page, setValueTesti, setPage, valueTesti } = MyContext();

  useEffect(() => {
    setValueTesti(testimonis.length);
    setTimeout(() => {
      if (page < valueTesti) {
        setPage(page + 1);
      }
      if (page == valueTesti) {
        setPage(page - 1);
      }
    }, 6000);
  }, [setPage, page, setValueTesti, valueTesti]);

  return (
    <section className=" py-20  ">
      <div className="container max-w-[1250px] space-y-12 mx-auto">
        <div className="flex justify-between items-end">
          <div className="text-start max-w-[45rem] leading-relaxed">
            <HeadingText
              leading="1.2"
              text={"Ini bisa menjadi keputusan yang "}
              highlight={"mengubah segalanya."}
            />
          </div>
          <Image
            src="/blackquote.svg"
            alt="blackquote"
            width={70}
            height={70}
          />
        </div>
        <Testimonial {...testimonis[page - 1]} />
      </div>
    </section>
  );
};

export default TestimonialSection;
