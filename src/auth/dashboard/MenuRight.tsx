import React from "react";
import Avatar from "../user/Avatar";
import MenuRightItem from "./MenuRightItem";
import MenuRightItem2 from "./MenuRightItem2";
import DateTime from "./DateTime";

type Props = {};

const MenuRight = (props: Props) => {
  return (
    <div className="absolute w-full max-w-[401px]  bg-white top-0 right-0 min-h-[940px] rounded-md shadow-md">
      <div className="mt-[24px] ml-6">
        <Avatar></Avatar>
      </div>
      <div className="max-w-[353px] w-full mx-auto mt-[44px]">
        <h1 className="text-orange font-bold leading-[36px] text-[26px] mb-4">
          Tổng quan
        </h1>
        <MenuRightItem
          img="/Frame625210.png 2x"
          service="Thiết bị"
          serviceImg="/monitor2.png 2x"
          color=""
          roudedImg="/Frame625214.png 2x"
          numberHeader="4.221"
          numberFirst="3.799"
          numberSecond="422"
          className=""
        ></MenuRightItem>
        <MenuRightItem
          img="/blue.png 2x"
          service="Dịch vụ"
          serviceImg="/Frameblue.png 2x"
          color="text-blueSer"
          roudedImg="/roundBlue.png "
          numberHeader="276"
          numberFirst="210"
          numberSecond="66"
          className="mr-3"
        ></MenuRightItem>
        <MenuRightItem2
          img="/green.png 2x"
          serviceImg="/icondasboard03.png"
          color=""
          service="Cấp số"
          roudedImg="/greenRs.png"
          numberHeader="4.221"
          numberFirst="3.721"
          numberTwo="486"
          numberThree="32"
        ></MenuRightItem2>
        <DateTime></DateTime>
      </div>
    </div>
  );
};

export default MenuRight;
