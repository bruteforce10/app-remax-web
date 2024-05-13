import Montserratt from "@/services/FontPremier";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { Awards, Community, Globe, Remax, Rocket, Technology } from "../icons";

const CardWhyMe = ({
  backgroundColor,
  textColor,
  heading,
  shortDescription,
  description,
  icon,
  image,
  number,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          backgroundColor: `${backgroundColor}`,
          color: `${textColor}`,
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className={`w-full h-64 max-sm:min-h-[300px] py-12 px-8 rounded-xl relative overflow-hidden flex flex-col justify-center items-start`}
      >
        <div className="pb-6">
          <h4
            className={`${Montserratt.className} max-sm:text-xl text-2xl pb-6 font-semibold`}
          >
            {heading}
          </h4>
          <p className=" text-md max-sm:text-sm max-w-[80%]">
            {shortDescription}
          </p>
        </div>
        <button
          className="underline underline-offset-2 text-[#4586F6] font-medium"
          onClick={() =>
            document.getElementById(`my_modal_${number}`).showModal()
          }
        >
          Baca Lebih Lanjut
        </button>
        <div className="absolute w-full h-auto sm:min-w-28 max-w-32 max-sm:max-w-8 max-sm:right-[65px] -right-2 -bottom-4">
          {number == 1 ? (
            <Globe color={textColor} />
          ) : number == 2 ? (
            <Rocket color={textColor} />
          ) : number == 3 ? (
            <Remax color={textColor} />
          ) : number == 4 ? (
            <Technology color={textColor} />
          ) : number == 5 ? (
            <Community color={textColor} />
          ) : (
            <Awards color={textColor} />
          )}
        </div>
        {/* <Image
          src={icon?.url}
          alt="why-me"
          width={200}
          className="absolute w-full h-auto sm:min-w-28 max-w-32 max-sm:max-w-20 -right-2 -bottom-4"
          height={200}
        /> */}
      </motion.div>
      <dialog id={`my_modal_${number}`} className="modal p-8">
        <div
          style={{
            backgroundColor: `${backgroundColor}`,
            color: `${textColor}`,
          }}
          className="modal-box w-[1200px] max-sm:w-full  min-h-[500px] flex flex-col justify-between relative  "
        >
          <MdOutlineClose
            onClick={() =>
              document.getElementById(`my_modal_${number}`).close()
            }
            className="absolute right-4 text-2xl cursor-pointer top-4"
          />
          <div className="py-8 px-8 ">
            <h4
              className={`${Montserratt.className} max-sm:text-xl text-2xl pb-4 font-semibold`}
            >
              {heading}
            </h4>
            <div
              className=" text-md max-sm:text-sm"
              dangerouslySetInnerHTML={{ __html: description?.html }}
            ></div>
          </div>
          <Image
            src={image?.url}
            alt="why-me"
            width={600}
            className=" w-full h-60 object-cover  object-left-center"
            height={200}
          />
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default CardWhyMe;
