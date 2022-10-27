import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
}

const Button = ({ text, className }: ButtonProps) => {
  return (
    <button
      className={`md:text-md md:font-semibold text-sm border border-white rounded-sm uppercase px-5 py-2 hover:bg-stone-600 text-white mt-2 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
