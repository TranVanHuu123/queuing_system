import React from "react";
type Props = {
  name: string;
  bg: string;
  text: string;
  className: string;
};

const CustomButton = ({ name, bg, text, className }: Props) => {
  return (
    <button
      type="submit"
      className={`border border-orange  text-[16px] leading-[24px] pt-2 pb-2 pl-10 pr-10 
      ${bg || "bg-orange"} rounded-[6px]  ${
        text || "text-white"
      } font-bold ${className}`}
    >
      {name}
    </button>
  );
};

export default CustomButton;
