import React, { useEffect, useState } from "react";
import Ractangle from "../../auth/form/Ractangle";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import IconPassword from "../../components/icons/IconPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { auth } from "../../firebase-app/Firebase-config";
import { signInWithEmailAndPassword } from "@firebase/auth";
import CustomButton from "../../components/button/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth-context";
type Props = {};
const schema = yup.object({
  email: yup.string().required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
});
const SignInPage = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const { userInfo } = useAuth();

  const navvigate = useNavigate();
  useEffect(() => {
    document.title = "Login page";
    if (userInfo?.email) navvigate("/tabbarmain");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  const handleSignIn = async (values: any) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navvigate("/tabbarmain");
  };

  return (
    <Ractangle>
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="mt-[83px] ml-[94px] max-w-[440px] "
      >
        <div className="flex flex-col gap-1">
          <Label className="" htmlFor="email">
            Email *
          </Label>
          <Input
            autoComplete="off"
            placeholder="tranvanhuu76@gmail.com"
            type="email"
            className=" w-[440px] h-[44px]  border-gray"
            name="email"
            control={control}
          >
            <span></span>
          </Input>
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <Label className="" htmlFor="password">
            Mật khẩu *
          </Label>
          <Input
            autoComplete="off"
            control={control}
            name="password"
            placeholder=""
            type={`${showPassword ? "text" : "password"}`}
            className={`  w-[440px] h-[44px]   ${
              errors?.password?.message?.toString()
                ? "border-red"
                : "border-gray"
            }`}
          >
            <IconPassword
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconPassword>
          </Input>
        </div>
        {errors.password && (
          <div className=" leading-[21px] text-red mt-3 text-[14px] font-[400] flex gap-2">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_84_5581)">
                <path
                  d="M10.228 18.8327C14.8304 18.8327 18.5613 15.1017 18.5613 10.4993C18.5613 5.89698 14.8304 2.16602 10.228 2.16602C5.62561 2.16602 1.89465 5.89698 1.89465 10.4993C1.89465 15.1017 5.62561 18.8327 10.228 18.8327Z"
                  stroke="#E73F3F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.228 13.834H10.2364"
                  stroke="#E73F3F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.228 7.16602V10.4993"
                  stroke="#E73F3F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_84_5581">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.228027 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>{errors.password.message?.toString()}</span>
          </div>
        )}
        <div className=" flex justify-center items-center mt-[19px]">
          <CustomButton
            className="max-w-[164px]  w-full h-[40px]"
            text=""
            bg=""
            name="Đăng nhập"
          ></CustomButton>
        </div>
        <Link
          to={"/forgotpassword"}
          className="block  leading-[21px] text-red  text-[14px] font-[400] mt-2 ml-[173px]"
        >
          Quên mật khẩu
        </Link>
        <Link
          to={"/signUp"}
          className="block  leading-[21px] text-red  text-[14px] font-[400] mt-2 ml-[173px]"
        >
          Đăng ký
        </Link>
      </form>
    </Ractangle>
  );
};

export default SignInPage;
