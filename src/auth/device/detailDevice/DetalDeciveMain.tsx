import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevice } from "../../../redux-thunk/slice/deviceDetailSlice";

type Props = {};

const DetalDeciveMain = (props: Props) => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const deviceId = params.get("id");
  const { devicetype } = useSelector((state: any) => state.device);

  useEffect(() => {
    if (deviceId) {
      dispatch(fetchDevice(deviceId) as any)
        .unwrap()
        .catch((error: string) => {
          console.log("Error:", error);
        });
    }
  }, [dispatch, deviceId]);

  return (
    <div className="max-w-[1112px] w-full ">
      <div className="w-full bg-white min-h-[604px] h-full rounded-lg">
        <div className="px-6 pt-4">
          <span className="text-[20px] leading-[30px] font-bold text-orange">
            Thông tin thiết bị
          </span>
          <div className="flex mb-4 mt-5 gap-x-[326px]">
            <div className="flex gap-x-[43px]">
              <div className="flex flex-col gap-y-4 text-[16px] leading-6 font-semibold">
                <span>Mã thiết bị:</span>
                <span>Tên thiết bị:</span>
                <span>Địa chỉ IP:</span>
              </div>
              <div className="flex flex-col gap-y-4 text-[16px] leading-6 text-gray400text">
                <span>{devicetype?.devicecode}</span>
                <span>{devicetype?.namedevice}</span>
                <span>{devicetype?.ipaddress}</span>
              </div>
            </div>
            <div className="flex gap-x-[43px]">
              <div className="flex flex-col gap-y-4 text-[16px] leading-6 font-semibold">
                <span>Loại thiết bị:</span>
                <span>Tên đăng nhập:</span>
                <span>Mật khẩu:</span>
              </div>
              <div className="flex flex-col gap-y-4 text-[16px] leading-6  text-gray400text">
                <span>{devicetype?.devicetypes?.name}</span>
                <span>{devicetype?.nameaccount}</span>
                <span>{devicetype?.password}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-[16px] leading-6 font-semibold ">
              Dịch vụ sử dụng:
            </span>
            <span className="text-[16px] leading-6 text-gray400text">
              {devicetype?.dichvu}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalDeciveMain;
