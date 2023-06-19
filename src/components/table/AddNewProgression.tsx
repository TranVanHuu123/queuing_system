import React from "react";
import { NavLink } from "react-router-dom";
type Props = {};

const AddNewProgression = (props: Props) => {
  return (
    <div className="cursor-pointer absolute w-[80px] h-[94px] bg-redor  flex justify-center items-center flex-col p-2 translate-x-[1124px]">
      <NavLink to={"/newprogression"}>
        <img className="" srcSet="/addsquare.png 2x" alt="add" />
        <span className="text-[14px] leading-5 text-orange font-bold mx-2">
          Cấp số mới
        </span>
      </NavLink>
    </div>
  );
};

export default AddNewProgression;
