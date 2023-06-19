import React, { useEffect, useState } from "react";
import Ractangle from "../../auth/form/Ractangle";

import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import { useForm, useController, UseControllerProps } from "react-hook-form";
import IconPassword from "../../components/icons/IconPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { collection, addDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase-app/Firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { toast } from "react-toastify";
import CustomButton from "../../components/button/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth-context";

type Props = {};
const schema = yup.object({
  name: yup.string().required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
});
const SignUpPage = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const navvigate = useNavigate();

  const handleSignUp = async (values: any) => {
    if (!isValid) return;
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(userCredential.user, {
      displayName: values.name,
    });
    const colRef = collection(db, "users");
    await addDoc(colRef, {
      name: values.name,
      email: values.email,
      password: values.password,
    });
    alert("Register susccessfully");
    navvigate("/tabbarmain");
  };

  return (
    <Ractangle>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="mt-[83px] ml-[94px] max-w-[440px] "
      >
        <div className="flex flex-col gap-1">
          <Label className="" htmlFor="name">
            Tên đăng nhập *
          </Label>
          <Input
            autoComplete="off"
            placeholder="tranvanhuu"
            type="text"
            className=" w-[440px] h-[44px]  border-gray"
            name="name"
            control={control}
          >
            <span></span>
          </Input>
        </div>
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
            className=" w-[440px] h-[44px]  border-gray"
          >
            <IconPassword
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconPassword>
          </Input>
        </div>

        <div className=" flex justify-center items-center mt-[19px]">
          <CustomButton
            className="max-w-[164px]  w-full h-[40px]"
            text=""
            bg=""
            name="Đăng ký"
          ></CustomButton>
        </div>
      </form>
    </Ractangle>
  );
};

export default SignUpPage;
