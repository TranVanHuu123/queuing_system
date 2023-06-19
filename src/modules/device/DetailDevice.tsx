import React from "react";
import Menubar from "../../auth/user/Menubar";
import DetailDeviceHeader from "../../auth/device/detailDevice/DetailDeviceHeader";

type Props = {};

const DetailDevice = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <DetailDeviceHeader></DetailDeviceHeader>
    </div>
  );
};

export default DetailDevice;
