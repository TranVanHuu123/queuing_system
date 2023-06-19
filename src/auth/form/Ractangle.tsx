import React from "react";

type Props = {
  children: React.ReactNode;
};
const Ractangle = ({ children }: Props) => {
  return (
    <div className="relative">
      <div className="fixed left-0 w-full min-h-screen bg-bg ">
        <img
          className="inline-block mt-[82px] translate-x-64"
          srcSet="./monkey.png 2x"
          alt="monkey"
        />
        <div>{children}</div>
      </div>
      <div className="fixed w-full max-w-[848px]  bg-[#a4d96c] min-h-screen right-0   ">
        <div className="w-full h-full flex justify-center items-center mt-[112px]">
          <img
            className="flex-shrink-0 object-cover "
            srcSet="/group.png 2x"
            alt="group"
          />
        </div>
        <div className="absolute top-[403px] left-[440px] text-orange ">
          <span className="text-4xl text-white">Hệ thống</span>
          <h1 className="text-[36px] text-white leading-[54px] font-extrabold">
            QUẢN LÝ XẾP HÀNG
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Ractangle;
