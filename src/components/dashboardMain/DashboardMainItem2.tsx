import React from "react";

type Props = {
  title: string;
  number: number;
  numberSmall: string;
  img: string;
};

const DashboardMainItem2 = ({ ...props }: Props) => {
  return (
    <div className=" rounded-[10px] bg-white pt-2 pl-3 pr-1 mt-[35px]">
      <div className="flex items-center justify-center gap-3 -ml-[51px]">
        <img srcSet={props.img} alt="start" />
        <div className="w-[75px] ">
          <h1 className="text-[14px] leading-[18px] font-bold text-gray400text">
            {props.title}
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center mt-3 gap-x-9">
        <span className="text-[30px] font-bold leading-[45px] text-gray400text ">
          {props.number}
        </span>
        <div className="w-12 h-[15px] rounded-lg colorRgb flex gap-1 justify-center items-center">
          <img className="w-[5px] h-[6px]" src="/Vector123.png" alt="vector" />
          <span className="text-[8px] leading-3">{props.numberSmall}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainItem2;
