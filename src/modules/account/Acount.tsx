import React from "react";
import Menubar from "../../auth/user/Menubar";
import AccountList from "../../auth/setting/account/AccountList";

type Props = {};

const Acount = (props: Props) => {
  return (
    <div className="relative">
      <AccountList></AccountList>
    </div>
  );
};

export default Acount;
