import React from "react";
import { useController } from "react-hook-form";
type Props = {
  name: string;
  type: string;
  children: React.ReactNode;
  placeholder: string;
  control: any;
  className: string;
  autoComplete: string;
};

const Input = ({
  name,
  type,
  className,
  children,
  placeholder = "qwdwq",
  control,
  autoComplete,
}: Props) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        autoComplete={autoComplete}
        id={name}
        type={type}
        className={`w-full ${className} px-6 py-4 text-sm font-medium border dark:bg-transparent  rounded-xl text-text1 dark:text-white dark:placeholder:text-text2 placeholder:text-text4   ${
          children ? "pr-16" : ""
        }`}
        placeholder={placeholder}
        {...field}
      ></input>

      {children && (
        <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
          {children}
        </span>
      )}
    </div>
  );
};

export default Input;
