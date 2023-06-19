import React from "react";
import Menubar from "../../auth/user/Menubar";
import UpdateAccountMain from "../../auth/setting/account/UpdateAccountMain";

type Props = {};

const UpdateAccount = (props: Props) => {
  return (
    <div className="relative">
      <UpdateAccountMain></UpdateAccountMain>
    </div>
  );
};

export default UpdateAccount;
