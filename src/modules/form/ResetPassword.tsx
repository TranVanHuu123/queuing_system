import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/button/CustomButton";
import Ractangle2 from "../../auth/form/Ractangle2";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import IconPassword from "../../components/icons/IconPassword";
import { useForm } from "react-hook-form";
import { confirmPasswordReset } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-app/Firebase-config";

type Props = {};

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
  });
  const navigate = useNavigate();
  const oobCode = useRef(null);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const oobCode = queryParams.get("oobCode");

    if (!oobCode) {
      navigate("/");
    }
  }, []);
  const handleResetPass = (values: any) => {
    const queryParams = new URLSearchParams(window.location.search);
    const oobCode = queryParams.get("oobCode");
    if (oobCode) {
      confirmPasswordReset(auth, oobCode, values.password).then(() => {
        navigate("/");
      });
    }
  };
  return (
    <Ractangle2>
      <div className="mt-[102px] ml-[90px]  max-w-[440px] w-full ">
        <form onSubmit={handleSubmit(handleResetPass)}>
          <h1 className="text-[22px] font-bold leading-[22px] text-center mb-4">
            Đặt lại mật khẩu mới
          </h1>
          <div className="flex flex-col gap-1 mt-4">
            <Label className="" htmlFor="password">
              Mật khẩu
            </Label>
            <Input
              autoComplete="off"
              control={control}
              name="password"
              placeholder=""
              type={`${showPassword ? "text" : "password"}`}
              className=" w-[440px] h-[44px]  border-gray"
            >
              <IconPassword
                open={showPassword}
                onClick={handleTogglePassword}
              ></IconPassword>
            </Input>
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <Label className="" htmlFor="againpassword">
              Nhập lại mật khẩu
            </Label>
            <Input
              autoComplete="off"
              control={control}
              name="againpassword"
              placeholder=""
              type={`${showPassword ? "text" : "password"}`}
              className=" w-[440px] h-[44px]  border-gray"
            >
              <IconPassword
                open={showPassword}
                onClick={handleTogglePassword}
              ></IconPassword>
            </Input>
          </div>
          <div className=" flex justify-center items-center mt-[48px]">
            <Button
              className="max-w-[164px]  w-full h-[40px]"
              text=""
              bg=""
              name="Xác nhận "
            ></Button>
          </div>
        </form>
      </div>
    </Ractangle2>
  );
};

export default ResetPassword;
