import React from "react";
import { Input } from "antd";
type Props = {
  label: string;
  id: string;
  name: string;
  className: string;
  type: string;
  autoComplete: string;
  placeholder: string;
};

const CustomInput = ({ label, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.id || props.name}>{label}</label>
      <div className="relative flex items-center">
        <Input {...props}></Input>
      </div>
    </div>
  );
};

export default CustomInput;
