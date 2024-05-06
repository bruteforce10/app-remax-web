import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 w-fit bg-red-remax text-white rounded-full"
    >
      {children}
    </button>
  );
};

export default Button;
