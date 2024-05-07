import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 w-fit  hover:bg-white hover:font-semibold transition-all hover:text-red-remax bg-red-remax text-white rounded-full"
    >
      {children}
    </button>
  );
};

export default Button;
