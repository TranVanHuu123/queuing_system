import React from "react";
import { useDropdown } from "./dropdownContext";

type Props = {
  placeholder: string;
  className: string;
};

const Select = ({ placeholder, className }: Props) => {
  const { toggle, show } = useDropdown();

  return (
    <div
      className={`flex items-center justify-between py-[9px] px-5 bg-white border border-grayf1 rounded-lg cursor-pointer text-sm text-[#B2B3BD] ${className}`}
      onClick={toggle}
    >
      <span>{placeholder}</span>
      <span>
        {show ? (
          <svg
            width={14}
            height={8}
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7 7L13 1" fill="#FF7506" />
            <path
              d="M1 1L7 7L13 1H1Z"
              stroke="#FF7506"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width={14}
            height={8}
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7 7L13 1" fill="#FF7506" />
            <path
              d="M1 1L7 7L13 1H1Z"
              stroke="#FF7506"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

export default Select;
