import Image from "next/image";
import React from "react";
import Montserratt from "@/services/FontPremier";
import CountUp from "./CountUp";
import { motion } from "framer-motion";

const AboutImg = () => {
  return (
    <>
      <div className="relative w-fit max-lg:scale-105  max-lg:mx-auto max-md:hidden">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-[8.5rem] h-[8.2rem] p-2 bg-[#003DA5] rounded-2xl absolute left-[3px] top-[-5px]  text-white flex flex-col justify-center"
        >
          <Image
            src={"/icon-home.svg"}
            alt="icon-home"
            className="mx-auto"
            width={40}
            height={40}
          />
          <CountUp initialValue={0} targetValue={125000} increase={500} />
          <p className="text-center leading-[-20px] text-xs">
            rekanan pemasaran tepercaya
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={"/about-us.webp"}
            alt="about-img"
            width={1000}
            height={100}
            className="w-full h-auto object-contain max-w-[550px] min-w-[550px]"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-[8.5rem] h-[8.2rem] bg-gradient-to-tr right-[0px] bottom-[-6px] rounded-2xl absolute  from-red-remax to-[#F44051] text-white flex flex-col justify-center"
        >
          <Image
            src={"/icon-remax.svg"}
            alt="icon-home"
            className="mx-auto"
            width={30}
            height={30}
          />
          <div className="flex justify-center">
            <CountUp initialValue={0} targetValue={8300} increase={20} />
            <span
              className={`inline-block text-2xl font-extrabold ${Montserratt.className}`}
            >
              +
            </span>
          </div>
          <p className="text-center leading-[-20px] text-xs">
            kantor cabang diberbagai negara
          </p>
        </motion.div>
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
