import React from "react";
import Frame from "../../frame/Frame";
import Avatar from "../../user/Avatar";
import InputTime from "../../../components/input/InputTime";
import CustomInputSearch from "../../../components/input/CustomInputSearch";
import NextPage from "../../../components/table/NextPage";
import TableDiary from "../../../components/table/TableDiary";

type Props = {};

const DiaryList = (props: Props) => {
  return (
    <Frame>
      <div className="mb-[30px] max-w-[1240px] w-full flex  gap-x-[642px] justify-center items-center">
        <div className="flex gap-x-4">
          <div className="flex items-center justify-center gap-x-4">
            <span className="text-[20px] leading-[30px] text-gray300 font-bold ">
              Thiết bị
            </span>
            <img
              className="w-[5px] h-[9px]"
              srcSet="/Vector323.png 1x"
              alt="vector"
            />
          </div>
          <span className="text-[20px] leading-[30px] text-orange font-bold">
            Danh sách dịch vụ
          </span>
        </div>
        <Avatar></Avatar>
      </div>

      <span className="text-[24px] left-9 text-orange font-bold inline-block mb-[16px]">
        Quản lý dịch vụ
      </span>

      <div className="max-w-[1112px] w-full">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-6">
            <div className="flex items-center justify-center gap-4">
              <InputTime
                className="w-[150px]"
                title="Chọn thời gian"
              ></InputTime>
              <img
                className="w-[5px] h-[5px]"
                src="/Vector154.png"
                alt="Vector"
              />
              <InputTime
                className="w-[150px]"
                title="Chọn thời gian"
              ></InputTime>
            </div>
          </div>
          <div className="mt-[-15px]">
            <CustomInputSearch></CustomInputSearch>
          </div>
        </div>
        <TableDiary></TableDiary>
      </div>
      <NextPage></NextPage>
    </Frame>
  );
};

export default DiaryList;
