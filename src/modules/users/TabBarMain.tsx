import React from "react";
import Menubar from "../../auth/user/Menubar";
import MenuBarMain from "../../auth/user/MenuBarMain";

type Props = {};

const TabBarMain = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <MenuBarMain></MenuBarMain>
    </div>
  );
};

export default TabBarMain;
