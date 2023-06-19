import React from "react";
import Frame from "../frame/Frame";
import PageDevice from "../../components/titleDevicePage/PageDevice";
import Avatar from "../user/Avatar";
import Comback from "../../components/table/Comback";

type Props = {};

const DetailPro = (props: Props) => {
  return (
    <Frame>
      <div className="mb-[30px]  w-[1240px]   ">
        <div className="relative flex w-full ">
          <div className="flex items-center justify-center gap-x-4">
            <PageDevice title="Cấp số"></PageDevice>
            <PageDevice title=" Danh sách cấp số"></PageDevice>
            <span className="text-[20px] leading-[30px] text-orange font-bold">
              Chi tiết
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
        <div className="w-full bg-white h-[604px] pt-6 rounded-2xl pl-6">
          <Comback></Comback>
          <span className="text-[20px] leading-[30px] text-orange font-bold">
            Thông tin cấp số
          </span>
          <div className="flex gap-x-[291px]">
            <div className="flex gap-10">
              <div className="text-[16px] leading-6 font-semibold text-black flex flex-col gap-y-4 mt-5">
                <span>Họ tên:</span>
                <span>Tên dịch vụ:</span>
                <span>Số thứ tự:</span>
                <span>Thời gian cấp:</span>
                <span>Hạn sử dụng:</span>
              </div>
              <div className="text-[16px] leading-6  text-gray400text flex flex-col gap-y-4 mt-5">
                <span>Nguyễn Thị Dung</span>
                <span>Khám tim mạch</span>
                <span>2001201</span>
                <span>14:35 - 07/11/2021</span>
                <span>18:00 - 07/11/2021</span>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="text-[16px] leading-6 font-semibold text-black flex flex-col gap-y-4 mt-5">
                <span>Nguồn cấp:</span>
                <span>Trạng thái:</span>
                <span>Số điện thoại:</span>
                <span>Địa chỉ Email:</span>
              </div>
              <div className="text-[16px] leading-6  text-gray400text flex flex-col gap-y-4 mt-5">
                <span>Kiosk</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-600"></div>
                  <span>Đang chờ</span>
                </div>
                <span>0948523623</span>
                <span>nguyendung@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default DetailPro;
