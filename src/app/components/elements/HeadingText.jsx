import React from "react";

const HeadingText = ({ text, highlight, leading = "1" }) => {
  return (
    <h3
      style={{ lineHeight: `${leading}` }}
      className={`font-bold text-5xl max-sm:text-4xl text-blue-remax`}
    >
      {text} <span className="text-stroke">{highlight}</span>
    </h3>
  );
};

export default HeadingText;
