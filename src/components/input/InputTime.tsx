import React from "react";

type Props = { title: string; className: string };

const InputTime = ({ ...props }: Props) => {
  return (
    <div className=" mb-[21px] flex flex-col">
      <span className="text-[16px] leading-6 text-gray500 font-semibold">
        {props.title}
      </span>
      <input
        type="date"
        className={` h-11 inline-block border px-4 border-gray rounded-lg ${props.className}`}
      />
    </div>
  );
};

export default InputTime;
