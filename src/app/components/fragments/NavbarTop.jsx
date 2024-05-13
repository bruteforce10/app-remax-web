"use client";
import React from "react";
import IconTextName from "../elements/IconTextName";
import { motion } from "framer-motion";

const NavbarTop = ({ topNavigations }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-blue-remax h-10 max-sm:h-16 flex items-center  justify-center"
    >
      <div className="container mx-auto w-fit max-sm:scale-95 px-8 flex sm:divide-x-2 max-sm:justify-center sm:max-w-[1250px]">
        {topNavigations.map((item, index) => (
          <IconTextName
            key={index}
            icon={item?.iconName?.url}
            text={item?.text}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default NavbarTop;
