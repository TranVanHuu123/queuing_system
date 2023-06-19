import React from "react";
import { useDropdown } from "./dropdownContext";

type Props = {
  children: React.ReactNode;
};

const List = ({ children }: Props) => {
  const { show } = useDropdown();

  return (
    <>
      {show && (
        <div className="absolute left-0 z-10 w-full bg-white border rounded-lg shadow-sm border-gray top-full">
          {children}
        </div>
      )}
    </>
  );
};
export default List;
