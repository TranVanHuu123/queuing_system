import React from "react";

type Props = {
  children: React.ReactNode;
};

const Ractangle2 = ({ children }: Props) => {
  return (
    <div className="">
      <div className=" fixed left-0 top-0 bg-bg  min-h-screen w-[calc(100%-848px)] ">
        <img
          className="inline-block mt-[82px] translate-x-64"
          srcSet="./monkey.png 2x"
          alt="monkey"
        />

        {children}
      </div>
      <div className="bg-white  fixed right-0 top-0 bottom-0 max-w-[848px] w-full ">
        <img
          className="w-[711px] h-[560px] ml-[43px]  mb-[83px] mt-[153px]"
          srcSet="/Frame123.png 2x"
          alt="group"
        />
      </div>
    </div>
  );
};

export default Ractangle2;
