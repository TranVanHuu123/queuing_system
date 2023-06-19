import React, { useEffect, useState } from "react";
import Input from "../../../components/input/Input";
import Label from "../../../components/label/Label";
import CustomButton from "../../../components/button/CustomButton";
import { useForm } from "react-hook-form";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase-app/Firebase-config";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { Dropdown } from "../../../components/dropDown";

type Props = {};

const AccountUpdateInformation = (props: Props) => {
  const [roleType, setRoletype] = useState<any>([]);
  const [statusType, setStatustype] = useState<any>([]);

  const [selectRoleType, setSelectRoleType] = useState("");
  const [selectStatusType, setSelectStatusType] = useState("");
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
  });
  const [params] = useSearchParams();
  const accountId = params.get("id");
  useEffect(() => {
    async function fetchData() {
      if (!accountId) return null;
      const docRef = doc(db, "account", accountId);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.data()) {
        reset(docSnapshot.data());
      }
    }
    fetchData();
  }, [accountId, reset]);
  const handleUpdateAccount = async (values: any) => {
    if (!accountId) return null;
    if (!isValid) return;
    try {
      const docRef = doc(db, "account", accountId);
      await updateDoc(docRef, { ...values });
      alert("Cập nhật thành công");
      toast.success("Update user information successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Update user failed!");
    }
  };
  useEffect(() => {
    async function getData() {
      const colRef = collection(db, "status");
      const querySnapshot = await getDocs(colRef);
      let result: any[] = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setStatustype(result);
    }
    getData();
  }, []);
  useEffect(() => {
    async function getData() {
      const colRef = collection(db, "role");
      const querySnapshot = await getDocs(colRef);
      let result: any[] = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setRoletype(result);
    }
    getData();
  }, []);
  const handleClickOption = async (item: any) => {
    const colRef = doc(db, "role", item.id);
    const docData = await getDoc(colRef);
    setValue("roles", {
      id: docData.id,
      ...docData.data(),
    });

    setSelectRoleType(item);
  };
  const handleClickOptionStatus = async (item: any) => {
    const colRef = doc(db, "status", item.id);
    const docData = await getDoc(colRef);
    setValue("listStatus", {
      id: docData.id,
      ...docData.data(),
    });
    setSelectStatusType(item);
  };
  return (
    <form onSubmit={handleSubmit(handleUpdateAccount)}>
      <div className="max-w-[1152px] w-full ">
        <div className="w-full bg-white min-h-[550px] h-full rounded-lg">
          <div className="px-6 pt-4">
            <span className="text-[20px] leading-[30px] font-bold text-orange">
              Thông tin thiết bị
            </span>
            <div className="flex gap-6">
              <div className="mt-[20px] flex-1">
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="fullname"
                  >
                    Họ tên: *
                  </Label>
                  <Input
                    placeholder="Nhập họ tên"
                    type="text"
                    control={control}
                    className="mb-4 p-2 w-[540px] pl-2 h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="fullname"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="telephone"
                  >
                    Số điện thoại:*
                  </Label>
                  <Input
                    placeholder="Nhập số điện thoại"
                    type="text"
                    control={control}
                    className="mb-4 p-2 w-[540px] pl-2 h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="telephone"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="email"
                  >
                    Email: *
                  </Label>
                  <Input
                    placeholder="Nhập email"
                    type="text"
                    control={control}
                    className="mb-4 p-2 w-[540px] pl-2 h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="email"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>

                <div className="flex flex-col gap-y-[3px]">
                  <label className="text-[16px] leading-6 font-semibold">
                    Vai trò: *
                  </label>
                  <Dropdown>
                    <Dropdown.Select
                      className=""
                      placeholder="Chọn vai trò"
                    ></Dropdown.Select>
                    <Dropdown.List>
                      {roleType.length > 0 &&
                        roleType.map((item: any) => (
                          <Dropdown.Option
                            value=""
                            key={item.id}
                            onClick={() => handleClickOption(item)}
                          >
                            {item.name}
                          </Dropdown.Option>
                        ))}
                    </Dropdown.List>
                  </Dropdown>
                </div>
              </div>
              <div className="mt-[20px] flex-1">
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="nameaccount"
                  >
                    Tên đăng nhập:*
                  </Label>
                  <Input
                    placeholder="Nhập tên đăng nhập"
                    type="text"
                    control={control}
                    className="mb-4 p-2 w-[540px] pl-2 h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="nameaccount"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="password"
                  >
                    Mật khẩu:*
                  </Label>
                  <Input
                    placeholder="Nhập mật khẩu"
                    type="text"
                    control={control}
                    className="mb-4 p-2 w-[540px] pl-2 h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="password"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="againpassword"
                  >
                    Nhập lại mật khẩu: *
                  </Label>
                  <Input
                    placeholder="Nhập mật khẩu"
                    type="text"
                    control={control}
                    className="mb-4 p-2 w-[540px] pl-2 h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="againpassword"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>

                <div className="flex flex-col gap-y-[3px]">
                  <label className="text-[16px] leading-6 font-semibold">
                    Tình trạng: *
                  </label>
                  <Dropdown>
                    <Dropdown.Select
                      className=""
                      placeholder="Hoạt động"
                    ></Dropdown.Select>
                    <Dropdown.List>
                      {statusType.length > 0 &&
                        statusType.map((item: any) => (
                          <Dropdown.Option
                            value=""
                            key={item.id}
                            onClick={() => handleClickOptionStatus(item)}
                          >
                            {item.name}
                          </Dropdown.Option>
                        ))}
                    </Dropdown.List>
                  </Dropdown>
                </div>
              </div>
            </div>

            <span className="text-[14px] leading-[21px] text-gray300">
              * Là trường thông tin bắt buộc
            </span>
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
            name="Cập nhật"
          ></CustomButton>
        </div>
      </div>
    </form>
  );
};

export default AccountUpdateInformation;
