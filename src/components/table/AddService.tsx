import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const AddService = (props: Props) => {
  return (
    <div className="absolute w-[80px] cursor-pointer h-[94px] bg-redor  flex justify-center items-center flex-col p-2 translate-x-[1124px]">
      <Link to={"/addservice"}>
        <img className="" srcSet="/addsquare.png 2x" alt="add" />
        <span className="text-[14px] leading-5 text-orange font-bold mx-2">
          Thêm dịch vụ
        </span>
      </Link>
    </div>
  );
};

export default AddService;
