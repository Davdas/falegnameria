import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button
      className={`md:text-md md:font-semibold text-sm bg-stone-700 uppercase px-5 py-2 rounded-2xl hover:bg-stone-600 text-white mt-2 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
