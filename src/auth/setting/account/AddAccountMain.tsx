import React from "react";
import Frame from "../../frame/Frame";
import PageDevice from "../../../components/titleDevicePage/PageDevice";
import Avatar from "../../user/Avatar";
import AccountInformation from "./AccountInformation";

type Props = {};

const AddAccountMain = (props: Props) => {
  return (
    <Frame>
      <div className="mb-[30px]  w-[1240px]   ">
        <div className="relative flex w-full ">
          <div className="flex items-center justify-center gap-x-4">
            <PageDevice title="Cài đặt hệ thống"></PageDevice>
            <PageDevice title="Quản lý tài khoản"></PageDevice>
            <span className="text-[20px] leading-[30px] text-orange font-bold">
              Thêm tài khoản
            </span>
          </div>
          <div className="absolute right-0 -top-1">
            <Avatar></Avatar>
          </div>
        </div>
      </div>
      <span className="text-[24px] left-9 text-orange font-bold inline-block mb-[16px]">
        Quản lý tài khoản
      </span>
      <AccountInformation></AccountInformation>
    </Frame>
  );
};

export default AddAccountMain;
