import React from "react";

type Props = {
  title: string;
};

const PageDevice = ({ ...props }: Props) => {
  return (
    <div className="flex items-center justify-center gap-x-4">
      <span className="text-[20px] leading-[30px] text-gray300 font-bold ">
        {props.title}
      </span>
      <img
        className="w-[5px] h-[9px]"
        srcSet="/Vector323.png 1x"
        alt="vector"
      />
    </div>
  );
};

export default PageDevice;
