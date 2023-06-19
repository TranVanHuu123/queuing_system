import React from "react";
import Menubar from "../../auth/user/Menubar";
import DetailPro from "../../auth/progression/DetailPro";

type Props = {};

const DetailProgression = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <DetailPro></DetailPro>
    </div>
  );
};

export default DetailProgression;
