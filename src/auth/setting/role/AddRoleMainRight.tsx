import React from "react";
import Checkbox from "../../../components/checkbox/Checkbox";

type Props = {};

const AddRoleMainRight = (props: Props) => {
  return (
    <div className="max-w-[560px] w-full mt-[58px]">
      <span>Phân quyền chức năng *</span>
      <div className="w-full bg-redor h-[420px] mt-3 rounded-lg pt-4 pl-6">
        <div>
          <span className="text-[20px] leading-[30px] text-orange font-bold">
            Nhóm chức năng A
          </span>
          <div className="flex flex-col mt-3 gap-y-3">
            <Checkbox>Tất cả</Checkbox>
            <Checkbox>Chức năng x</Checkbox>
            <Checkbox>Chức năng y</Checkbox>
            <Checkbox>Chức năng z</Checkbox>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-[20px] leading-[30px] text-orange font-bold">
            Nhóm chức năng B
          </span>
          <div className="flex flex-col mt-3 gap-y-3">
            <Checkbox>Tất cả</Checkbox>
            <Checkbox>Chức năng x</Checkbox>
            <Checkbox>Chức năng y</Checkbox>
            <Checkbox>Chức năng z</Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoleMainRight;
