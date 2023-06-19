import React from "react";
import Checkbox from "../checkbox/Checkbox";

type Props = {};

const RuleRecive = (props: Props) => {
  return (
    <div className="">
      <span className="text-[20px] leading-[30px] font-bold text-orange">
        Quy tắc cấp số
      </span>
      <div className="flex flex-col mt-3 gap-y-9">
        <div className="flex items-center gap-x-[15px]">
          <Checkbox>Tăng tự động từ:</Checkbox>
          <input
            type="text"
            placeholder="0001"
            className="w-[64px] h-11 rounded-lg p-3 border border-gray"
          ></input>
          <span>đến</span>
          <input
            type="text"
            placeholder="9999"
            className="w-[64px] h-11 rounded-lg p-3 border border-gray"
          ></input>
        </div>
        <div className="flex items-center gap-x-[88px]">
          <Checkbox>Prefix:</Checkbox>
          <input
            type="text"
            placeholder="0001"
            className="w-[64px] h-11 rounded-lg p-3 border border-gray"
          ></input>
        </div>
        <div className="flex items-center gap-x-[88px]">
          <Checkbox>Surfix:</Checkbox>
          <input
            type="text"
            placeholder="0001"
            className="w-[64px] h-11 rounded-lg p-3 border border-gray"
          ></input>
        </div>
        <Checkbox>Reset mỗi ngày</Checkbox>
      </div>
    </div>
  );
};

export default RuleRecive;
