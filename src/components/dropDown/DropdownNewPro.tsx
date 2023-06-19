import React from "react";

type Props = {
  title: string;
};

const DropdownNewPro = ({ ...props }: Props) => {
  return (
    <div className=" mb-[80px] mt-5">
      <span className="text-[20px] leading-[30px] font-bold">
        {props.title}
      </span>
      {/* <div className="mt-1 ">
        <select className=" select p-[11px]  w-[300px] outline-none border border-gray rounded-lg">
          <option value="all">Tất cả</option>
        </select>
      </div> */}
      <div className="relative w-[400px]  border border-gray rounded-lg bg-white cursor-pointer">
        <div className="flex items-center justify-between w-full px-4 py-[10px] ">
          <span className="text-[16px] leading-6 text-gray200 ">
            Chọn dịch vụ
          </span>
          <span>
            <img srcSet="./fi_chevron-down.png 2x" alt="down" />
          </span>
        </div>
        {/* <div className=" option absolute w-full rounded-lg bg-white text-[16px] leading-6 text-gray400text top-[45px]">
          <ul className="ml-3 ">
            <li className="py-3 l1">Tất cả</li>
            <li className="py-3 l2">Hoạt động</li>
            <li className="py-3 l3">Ngưng hoạt động</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default DropdownNewPro;
