/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const IconTextName = ({ icon, text }) => {
  return (
    <div className="text-white flex gap-x-2 items-center px-6">
      <Image
        src={icon}
        width={18}
        height={100}
        className="w-5 h-5 "
        alt="icon-call"
      />
      {typeof text === "object" ? (
        <ul className="flex sm:gap-4 gap-1 max-sm:flex-col">
          {text.map((item, index) => {
            return (
              <li key={index} className="flex gap-4 items-center">
                <p className={`text-sm whitespace-nowrap w-full `}>{item}</p>
                {index === text.length - 1 ? null : (
                  <span className="max-sm:hidden">-</span>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={`text-sm whitespace-nowrap w-full `}>{text}</p>
      )}
    </div>
  );
};

export default IconTextName;
