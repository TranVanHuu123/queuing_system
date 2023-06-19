import React from "react";
import Frame from "../frame/Frame";
import Avatar from "../user/Avatar";
import PageDevice from "../../components/titleDevicePage/PageDevice";
import DropdownNewPro from "../../components/dropDown/DropdownNewPro";
import CustomButton from "../../components/button/CustomButton";

type Props = {};

const New = (props: Props) => {
  return (
    <Frame>
      <div className="mb-[30px]  w-[1240px]   ">
        <div className="relative flex w-full ">
          <div className="flex items-center justify-center gap-x-4">
            <PageDevice title="Cấp số"></PageDevice>
            <PageDevice title=" Danh sách cấp số"></PageDevice>
            <span className="text-[20px] leading-[30px] text-orange font-bold">
              Cấp số mới
            </span>
          </div>
          <div className="absolute right-0 -top-1">
            <Avatar></Avatar>
          </div>
        </div>
      </div>
      <span className="text-[24px] left-9 text-orange font-bold inline-block mb-[16px]">
        Quản lý cấp số
      </span>

      <div className="max-w-[1192px] w-full ">
        <div className="w-full bg-white h-[604px] pt-6 rounded-2xl ">
          <div className="w-[400px] text-center mx-auto">
            <h1 className="text-orange text-[32px] leading-[48px] font-bold">
              CẤP SỐ MỚI
            </h1>
            <DropdownNewPro title="Dịch vụ khách hàng lựa chọn"></DropdownNewPro>
            <div className="flex items-center justify-center gap-8 mt-6">
              <CustomButton
                text="text-orange"
                bg="bg-redor"
                name="Hủy bỏ"
                className="max-w-[180px]  w-full h-[48px] text-[16px] leading-[22px] pt-3 pb-3 pl-6 pr-6 "
              ></CustomButton>
              <CustomButton
                className="max-w-[180px]  w-full h-[48px] text-[16px] leading-[22px] pt-3 pb-3 pl-6 pr-6 "
                text=""
                bg=""
                name="Thêm"
              ></CustomButton>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default New;
