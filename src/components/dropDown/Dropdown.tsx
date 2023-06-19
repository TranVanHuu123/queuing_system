import React from "react";
import { DropdownProvider } from "./dropdownContext";
import List from "./List";
import Option from "./Option";
import Select from "./Select";

type Props = {
  children: React.ReactNode;
};

const Dropdown = ({ children, ...props }: Props) => {
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full">{children}</div>
    </DropdownProvider>
  );
};
Dropdown.Option = Option;
Dropdown.List = List;
Dropdown.Select = Select;

export default Dropdown;
