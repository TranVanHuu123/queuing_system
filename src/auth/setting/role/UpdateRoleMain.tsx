import React, { useEffect } from "react";
import Frame from "../../frame/Frame";
import PageDevice from "../../../components/titleDevicePage/PageDevice";
import Avatar from "../../user/Avatar";
import AddRoleMainRight from "./AddRoleMainRight";
import CustomButton from "../../../components/button/CustomButton";
import Label from "../../../components/label/Label";
import Input from "../../../components/input/Input";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-app/Firebase-config";
import { toast } from "react-toastify";

type Props = {};

const UpdateRoleMain = (props: Props) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });
  const [params] = useSearchParams();
  const roleId = params.get("id");
  useEffect(() => {
    async function fetchData() {
      if (!roleId) return null;
      const docRef = doc(db, "role", roleId);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.data()) {
        reset(docSnapshot.data());
      }
    }
    fetchData();
  }, [roleId, reset]);
  const handleUpdateRole = async (values: any) => {
    if (!roleId) return null;
    if (!isValid) return;

    try {
      const docRef = doc(db, "role", roleId);
      await updateDoc(docRef, { ...values });
      alert("Cập nhật thành công");
      toast.success("Update user information successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Update user failed!");
    }
  };
  return (
    <Frame>
      <div className="mb-[30px]  w-[1240px]   ">
        <div className="relative flex w-full ">
          <div className="flex items-center justify-center gap-x-4">
            <PageDevice title="Cài đặt hệ thống"></PageDevice>
            <PageDevice title=" Quản lý vai trò"></PageDevice>
            <span className="text-[20px] leading-[30px] text-orange font-bold">
              Cập nhật vai trò
            </span>
          </div>
          <div className="absolute right-0 -top-1">
            <Avatar></Avatar>
          </div>
        </div>
      </div>
      <span className="text-[24px] left-9 text-orange font-bold inline-block mb-[16px]">
        Danh sách vai trò
      </span>

      <form onSubmit={handleSubmit(handleUpdateRole)}>
        <div className="max-w-[1192px] w-full ">
          <div className="w-full bg-white h-[604px] pt-6 rounded-2xl pl-6">
            <div className="flex gap-x-3">
              <div className="max-w-[560px] w-full">
                <span className="text-[20px] leading-[30px] text-orange font-bold">
                  Thông tin vai trò
                </span>
                <div className="mt-4">
                  <div className="flex flex-col gap-y-2">
                    <Label
                      className="text-[16px] leading-6 font-semibold"
                      htmlFor="name"
                    >
                      Tên vai trò: *
                    </Label>
                    <Input
                      name="name"
                      placeholder="Nhập tên vai trò"
                      type="text"
                      control={control}
                      className="mb-4 p-2 w-[550px] h-[44px] rounded-lg border-[1px] border-solid border-gray "
                      autoComplete="off"
                    >
                      <span></span>
                    </Input>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <Label
                      className="text-[16px] leading-6 font-semibold"
                      htmlFor="describes"
                    >
                      Mô tả:
                    </Label>
                    <Input
                      name="describes"
                      placeholder="Nhập mô tả"
                      type="text"
                      control={control}
                      className="mb-4 p-2 w-[550px] h-[44px] rounded-lg border-[1px] border-solid border-gray pb-[130px] pt-4"
                      autoComplete="off"
                    >
                      <span></span>
                    </Input>
                  </div>

                  <span>* Là trường thông tin bắt buộc</span>
                </div>
              </div>
              <AddRoleMainRight></AddRoleMainRight>
            </div>
          </div>
        </div>
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
            name="Cập nhật "
          ></CustomButton>
        </div>
      </form>
    </Frame>
  );
};

export default UpdateRoleMain;
