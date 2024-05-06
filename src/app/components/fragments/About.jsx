"use client";
import React from "react";
import AboutImg from "../elements/AboutImg";
import HeadingText from "../elements/HeadingText";
import useSectionView from "@/lib/hook";

const About = ({ abouts }) => {
  const { heading, headingHighligt, description } = abouts[0];

  const { ref } = useSectionView("ABOUT US");

  return (
    <section
      id="about"
      className="py-20 max-lg:pt-0 max-lg:-mt-12 max-md:mt-[-24px] container max-w-[1250px] px-8 mx-auto max-xl:gap-x-36 gap-y-8 grid grid-cols-1 max-lg:text-center lg:grid-cols-2"
    >
      <AboutImg />
      <div ref={ref} className="space-y-8 max-lg:mt-8 max-sm:mt-0">
        <div>
          <HeadingText text={heading} highlight={headingHighligt} />
          <div className="w-16 h-0.5 rounded-full bg-blue-remax max-lg:mx-auto max-lg:mt-2"></div>
        </div>
        <div
          className="leading-relaxed max-lg:max-w-[40rem] max-lg:mx-auto"
          dangerouslySetInnerHTML={{ __html: description?.html }}
        ></div>
      </div>
    </section>
  );
};

export default About;
