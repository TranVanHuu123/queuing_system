import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { auth } from "../../firebase-app/Firebase-config";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import { onAuthStateChanged } from "firebase/auth";
type Props = {};

const MenuBarMain = (props: Props) => {
  const [userInfo, setUserInfo] = useState<any | null>("");
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserInfo(currentUser);
      } else {
        setUserInfo("");
      }
    });
  }, []);
  const {
    control,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });
  return (
    <div>
      <div className="ml-[224px]  min-h-screen ">
        <div className=" mr-[64px] flex justify-between pt-[29px]">
          <h1 className=" text-orange text-[20px] leading-[30px] font-bold">
            Thông tin cá nhân
          </h1>
          <Avatar></Avatar>
        </div>
        <div className="flex relative gap-x-6  max-w-[1112px] h-[397px] w-full  mt-[109px] bg-white shadow-md rounded-xl ">
          <div className="mt-[40px]">
            <div className=" w-[248px] h-[248px] rounded-full top-10 ml-[24px]">
              <div>
                <img
                  className="relative object-cover w-full h-full"
                  srcSet="/avatar2.png 3x"
                  alt="avatar"
                />
                <img
                  className="absolute left-[163px] top-[261px]"
                  srcSet="Group624817.png 2x"
                  alt=""
                />
              </div>
              <h1 className="absolute mt-5 left-[84px] text-[24px] leading-[36px] font-bold">
                {userInfo?.displayName}
              </h1>
            </div>
          </div>
          <div className="flex gap-x-6 mt-[20px] max-w-[808px] w-full">
            <div className=" max-w-[384px] w-full">
              <div className="flex flex-col gap-1 mt-6">
                <Label
                  className="text-base font-semibold leading-6"
                  htmlFor="name"
                >
                  Tên người dùng
                </Label>
                <Input
                  autoComplete="off"
                  placeholder={`${userInfo?.displayName}`}
                  type="text"
                  className=" w-full h-[44px] bg-gray50 rounded-md  border-gray"
                  name="name"
                  control={control}
                >
                  <span></span>
                </Input>
              </div>
              <div className="flex flex-col gap-1 mt-6">
                <Label
                  className="text-base font-semibold leading-6"
                  htmlFor="phone"
                >
                  Số điện thoại
                </Label>
                <Input
                  autoComplete="off"
                  placeholder="0356753260"
                  type="text"
                  className=" w-full h-[44px] bg-gray50 rounded-md  border-gray"
                  name="phone"
                  control={control}
                >
                  <span></span>
                </Input>
              </div>
              <div className="flex flex-col gap-1 mt-6">
                <Label
                  className="text-base font-semibold leading-6"
                  htmlFor="email"
                >
                  Email:
                </Label>
                <Input
                  autoComplete="off"
                  placeholder={`${userInfo?.email}`}
                  type="text"
                  className=" w-full h-[44px] bg-gray50 rounded-md  border-gray"
                  name="email"
                  control={control}
                >
                  <span></span>
                </Input>
              </div>
            </div>
            <div className="max-w-[384px] w-full">
              <div className="flex flex-col gap-1 mt-6">
                <Label
                  className="text-base font-semibold leading-6"
                  htmlFor="nameaccount"
                >
                  Tên đăng nhập
                </Label>
                <Input
                  autoComplete="off"
                  placeholder={`${userInfo?.displayName}`}
                  type="text"
                  className=" w-full h-[44px] bg-gray50 rounded-md  border-gray"
                  name="nameaccount"
                  control={control}
                >
                  <span></span>
                </Input>
              </div>
              <div className="flex flex-col gap-1 mt-6">
                <Label
                  className="text-base font-semibold leading-6"
                  htmlFor="password"
                >
                  Mật khẩu
                </Label>
                <Input
                  autoComplete="off"
                  placeholder="12345678"
                  type="text"
                  className=" w-full h-[44px] bg-gray50 rounded-md  border-gray"
                  name="password"
                  control={control}
                >
                  <span></span>
                </Input>
              </div>
              <div className="flex flex-col gap-1 mt-6">
                <Label
                  className="text-base font-semibold leading-6"
                  htmlFor="role"
                >
                  Vai trò:
                </Label>
                <Input
                  autoComplete="off"
                  placeholder="Kế toán"
                  type="text"
                  className=" w-full h-[44px] bg-gray50 rounded-md  border-gray"
                  name="role"
                  control={control}
                >
                  <span></span>
                </Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBarMain;
