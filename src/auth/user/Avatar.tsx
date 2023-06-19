import React from "react";
import { useAuth } from "../../context/Auth-context";

type Props = {};

const Avatar = (props: Props) => {
  const { userInfo } = useAuth();

  return (
    <div className="flex justify-center items-center gap-[24px]">
      <img
        className="w-[32px] h-[32px]"
        srcSet="/Frame271.png 2x"
        alt="frame"
      />
      <div className="flex gap-2">
        <div className="w-10 h-10 rounded-full">
          <img
            className="object-cover w-full h-full rounded-full"
            srcSet="/avatar.png 2x"
            alt="avatr"
          />
        </div>
        <div className="">
          <span className="text-[12px] leading-[18px] text-gray300">
            Xin chào
          </span>
          <h2 className="text-[16px] font-bold leading-6 text-gray400text">
            {userInfo.displayName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
