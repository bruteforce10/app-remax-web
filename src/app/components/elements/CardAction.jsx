import Image from "next/image";
import React from "react";
import Button from "./Button";

const CardAction = ({ call }) => {
  return (
    <div className="flex gap-4  backdrop-blur-sm  items-start bg-gradient-to-r from-white/30 to-white/10 p-6 rounded-xl border-[1px] border-[#E4E4E4] lg:w-[50rem] mx-auto">
      {" "}
      <Image
        src={"/cs-remax.webp"}
        width={170}
        height={70}
        alt="profile"
        className="object-cover w-16 h-16 rounded-full "
      />
      <div className="space-y-4">
        <p className="text-white text-xl leading-relaxed max-w-[40rem] max-sm:text-sm text-start">
          {" "}
          Segera hubungi <span className="font-bold ">{call}</span> dan dapatkan
          konsultasi Waralaba RE/MAX dari ahlinya!
        </p>
        <Button>Miliki Kantor RE/MAX</Button>
      </div>
    </div>
  );
};

export default CardAction;
