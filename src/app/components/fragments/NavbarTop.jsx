import React from "react";
import IconTextName from "../elements/IconTextName";

const NavbarTop = ({ topNavigations }) => {
  return (
    <div className="bg-blue-remax h-10 flex items-center  ">
      <div className="container mx-auto max-sm:justify-center sm:px-8 flex divide-x-2 max-w-[1250px]">
        {topNavigations.map((item, index) => (
          <IconTextName
            key={index}
            icon={item?.iconName?.url}
            text={item?.text}
          />
        ))}
      </div>
    </div>
  );
};

export default NavbarTop;
