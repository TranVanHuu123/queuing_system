import React from "react";
import { useDropdown } from "./dropdownContext";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  value: string;
};

const Option = (props: Props) => {
  const { onClick, ...rest } = props;
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="flex items-center justify-between px-5 py-3 text-sm transition-all cursor-pointer hover:text-primary"
      onClick={handleClick}
      {...rest}
    >
      {props.children}
    </div>
  );
};

export default Option;
