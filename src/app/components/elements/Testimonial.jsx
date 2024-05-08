import { MyContext } from "@/lib/AppContext";
import Montserratt from "@/services/FontPremier";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Testimonial = ({ job, name, description, avatar }) => {
  const { page, setPage, valueTesti } = MyContext();

  return (
    <div>
      <AnimatePresence>
        <motion.blockquote
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <p className="text-xl font-semibold leading-relaxed text-gray-900  min-h-[8rem] dark:text-white">
            &quot;{description}&quot;
          </p>
        </motion.blockquote>
      </AnimatePresence>
      <div className="w-full h-0.5 rounded-full bg-[#E4E4E4] my-4"></div>
      <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3"
        >
          <Image
            src={"/avatar.webp"}
            width={50}
            height={50}
            alt="profile"
            className="border-[2px] border-red-remax rounded-full"
          />
          <div className="flex flex-col">
            <h5 className={`text-xl font-semibold ${Montserratt.className}`}>
              {name}
            </h5>
            <p>{job}</p>
          </div>
        </motion.div>
        <div className="flex gap-2 items-center">
          <Image
            src={"/arrow.svg"}
            onClick={() => {
              if (page > 1) {
                setPage((prev) => prev - 1);
              }
            }}
            width={50}
            height={50}
            className="cursor-pointer hover:scale-x-[-0.9] transition-all scale-x-[-1]"
            alt="quote"
          />
          <Image
            src={"/arrow.svg"}
            onClick={() => {
              if (page < valueTesti) {
                setPage((prevPage) => prevPage + 1);
              }
            }}
            width={50}
            height={50}
            className="cursor-pointer hover:scale-90 transition-all"
            alt="quote"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
