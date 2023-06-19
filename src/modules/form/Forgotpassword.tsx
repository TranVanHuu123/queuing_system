import React from "react";
import Ractangle2 from "../../auth/form/Ractangle2";
import Button from "../../components/button/CustomButton";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "@firebase/auth";
import { auth, db } from "../../firebase-app/Firebase-config";
import "firebase/database";
type Props = {};

const Forgotpassword = (props: Props) => {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
  });
  const navigate = useNavigate();
  const handleForgot = async (values: any) => {
    await sendPasswordResetEmail(auth, values.email).then(() => {
      navigate("/");
    });
  };
  return (
    <Ractangle2>
      <div className="mt-[102px] max-w-[440px] w-full ml-[120px]">
        <form onSubmit={handleSubmit(handleForgot)}>
          <h1 className="text-[22px] font-bold leading-[22px] text-center mb-4">
            Đặt lại mật khẩu
          </h1>
          <span className="mb-2 text-[18px] leading-[27px] ">
            Vui lòng nhập email để đặt lại mật khẩu của bạn *
          </span>
          <Input
            control={control}
            placeholder=""
            type="email"
            className="w-[440px] h-[44px]  border-gray"
            name="email"
            autoComplete="off"
          >
            <span></span>
          </Input>
          <div className="flex gap-[24px] justify-center items-center mt-[48px] ">
            <Button
              className="max-w-[164px]  w-full h-[40px]"
              text="text-orange"
              bg="bg-transparent"
              name="Hủy"
            ></Button>
            <Button
              className="max-w-[164px]  w-full h-[40px]"
              text=""
              bg=""
              name="Tiếp tục"
            ></Button>
          </div>
        </form>
      </div>
    </Ractangle2>
  );
};

export default Forgotpassword;
