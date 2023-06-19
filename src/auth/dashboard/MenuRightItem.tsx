import React from "react";

type Props = {
  img: string;
  serviceImg: string;
  service: string;
  color: string;
  roudedImg: string;
  numberHeader: string;
  numberFirst: string;
  numberSecond: string;
  className: string;
};

const MenuRightItem = ({ ...props }: Props) => {
  return (
    <div className="w-full ">
      <div className="w-full py-[11px] px-4 rounded-[15px] flex justify-between  shadowitem mt-3">
        <div>
          <img srcSet={props.img} alt="img" />
        </div>
        <div className="">
          <span className="leading-[36px] text-[24px] font-[800] text-gray400text">
            {props.numberFirst}
          </span>
          <span
            className={`flex items-center ${
              props.color || "text-orange"
            } gap-[2px]`}
          >
            <img
              className="w-[14px] h-[14px] "
              srcSet={props.serviceImg}
              alt="minitor"
            />
            {props.service}
          </span>
        </div>
        <div className="flex my-auto gap-x-1">
          <div className="flex items-center justify-between ">
            <div className="items-center justify-center ">
              <div className="flex items-center justify-center ">
                <img className="w-1 h-1" srcSet={props.roudedImg} alt="img" />
                <span className="text-[12px] leading-[21px] text-gray300 ml-1 mr-3">
                  Đang hoạt động
                </span>
              </div>
              <div className="flex items-center justify-center ">
                <img className="w-1 h-1 " srcSet="/Frame625215.png" alt="img" />
                <span className="text-[12px] leading-[21px] text-gray300 ml-1 mr-1">
                  Ngưng hoạt động
                </span>
              </div>
            </div>
          </div>

          <div className={props.className}>
            <h3
              className={`text-[14px] leading-[18px] font-bold mb-[6px] ${
                props.color || "text-orange"
              }`}
            >
              {props.numberFirst}
            </h3>
            <h3
              className={`text-[14px] leading-[18px] font-bold ${
                props.color || "text-orange"
              }`}
            >
              {props.numberSecond}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuRightItem;
