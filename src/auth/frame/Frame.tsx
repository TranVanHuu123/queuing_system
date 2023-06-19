import React from "react";

type Props = {
  children: React.ReactNode;
};

const Frame = ({ children }: Props) => {
  return <div className="absolute  left-[224px] mt-[29px] ">{children}</div>;
};

export default Frame;
