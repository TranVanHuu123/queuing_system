import React from "react";

type Props = {
  children: React.ReactNode;
};

const Checkbox = ({ children }: Props) => {
  return (
    <div className="flex items-start gap-x-5">
      <div className="inline-flex items-center justify-center w-5 h-5 p-1 text-white border rounded cursor-pointer border-blueSer ">
        <input
          type="checkbox"
          className="hidden"
          onChange={() => {}}
          name="name"
        ></input>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </div>
      {children && <div className="cursor-pointer ">{children}</div>}
    </div>
  );
};

export default Checkbox;
