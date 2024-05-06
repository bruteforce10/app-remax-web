/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const IconTextName = ({ icon, text }) => {
  return (
    <div className="text-white flex gap-x-2 items-center px-6">
      <Image src={icon} width={18} height={100} alt="icon-call" />
      <p className={`text-sm whitespace-nowrap w-full `}>{text}</p>
    </div>
  );
};

export default IconTextName;
