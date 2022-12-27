import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
}

const Button = ({ text, className }: ButtonProps) => {
  return (
    <button
      className={`md:text-md text-sm border font-bold border-amber-600 rounded-sm uppercase px-5 py-2 hover:bg-stone-600 text-white mt-2 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
