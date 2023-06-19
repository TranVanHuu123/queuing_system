import React from "react";
import Menubar from "../../auth/user/Menubar";
import MenuRight from "../../auth/dashboard/MenuRight";
import DashboardMain from "../../auth/dashboard/DashboardMain";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="relative">
      <DashboardMain></DashboardMain>
      <MenuRight></MenuRight>
    </div>
  );
};

export default Dashboard;
