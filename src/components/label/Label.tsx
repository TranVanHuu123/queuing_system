import React from "react";

type Props = {
  htmlFor: string;
  children: React.ReactNode;
  className: string;
};

const Label = ({ htmlFor, children, className }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`inline-block text-sm font-medium cursor-pointer dark:text-text3 text-text2 ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
