import React from "react";

type Props = {
  label: string;
  id: string;
  name: string;
  autoComplete: string;
};

const CustomInputUsers = ({ label, ...props }: Props) => {
  return (
    <div className="flex flex-col w-full mt-6">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className=" w-full h-[44px]  bg-gray50 rounded-md mt-2 p-2 text-gray400text"
        {...props}
      ></input>
    </div>
  );
};

export default CustomInputUsers;
