import React from "react";
import { NavLink } from "react-router-dom";
type Props = {};

const AddRole = (props: Props) => {
  return (
    <div className="cursor-pointer absolute w-[80px] h-[94px] bg-redor  flex justify-center items-center flex-col p-2 translate-x-[1124px]">
      <NavLink to={"/addrole"}>
        <img className="" srcSet="/addsquare.png 2x" alt="add" />
        <span className="text-[14px] leading-5 text-orange font-bold mx-2">
          Thêm vai trò
        </span>
      </NavLink>
    </div>
  );
};

export default AddRole;
