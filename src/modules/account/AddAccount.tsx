import React from "react";
import Menubar from "../../auth/user/Menubar";
import AddAccountMain from "../../auth/setting/account/AddAccountMain";

type Props = {};

const AddAccount = (props: Props) => {
  return (
    <div className="relative">
      <AddAccountMain></AddAccountMain>
    </div>
  );
};

export default AddAccount;
