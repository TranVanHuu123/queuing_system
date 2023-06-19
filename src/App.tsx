import TabBarMain from "./modules/users/TabBarMain";
import Dashboard from "./modules/dashboard/Dashboard";
import Device from "./modules/device/Device";
import Forgotpassword from "./modules/form/Forgotpassword";
import ResetPassword from "./modules/form/ResetPassword";
import AddDevice from "./modules/device/AddDevice";
import UpdateDvice from "./modules/device/UpdateDvice";
import ServiceList from "./modules/service/ServiceList";
import AddService from "./modules/service/AddService";
import DetailService from "./modules/service/DetailService";
import UpdateService from "./modules/service/UpdateService";
import ProgressionList from "./modules/progression/ProgressionList";
import NewProgression from "./modules/progression/NewProgression";
import Report from "./modules/report/Report";
import Role from "./modules/role/Role";
import AddRole from "./modules/role/AddRole";
import UpdateRole from "./modules/role/UpdateRole";
import Acount from "./modules/account/Acount";
import Diary from "./modules/diary/Diary";
import AddAccount from "./modules/account/AddAccount";
import UpdateAccount from "./modules/account/UpdateAccount";
import { AuthProvider } from "./context/Auth-context";
import SignInPage from "./modules/form/SignInPage";
import Menubar from "./auth/user/Menubar";
import DetailDeviceHeader from "./auth/device/detailDevice/DetailDeviceHeader";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignInPage></SignInPage>}></Route>
          <Route
            path="/forgotpassword"
            element={<Forgotpassword></Forgotpassword>}
          ></Route>
          <Route
            path="/resetpassword"
            element={<ResetPassword></ResetPassword>}
          ></Route>

          <Route path="/tabbarmain" element={<TabBarMain></TabBarMain>}></Route>
          <Route path="/" element={<Menubar></Menubar>}>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/device" element={<Device></Device>}></Route>
            <Route path="/adddevice" element={<AddDevice></AddDevice>}></Route>
            <Route
              path="/updatedevice"
              element={<UpdateDvice></UpdateDvice>}
            ></Route>
            <Route
              path="/detaildevice"
              element={<DetailDeviceHeader></DetailDeviceHeader>}
            ></Route>
            <Route
              path="/service"
              element={<ServiceList></ServiceList>}
            ></Route>
            <Route
              path="/addservice"
              element={<AddService></AddService>}
            ></Route>
            <Route
              path="/detailservice"
              element={<DetailService></DetailService>}
            ></Route>
            <Route
              path="/updateservice"
              element={<UpdateService></UpdateService>}
            ></Route>
            <Route
              path="/progression"
              element={<ProgressionList></ProgressionList>}
            ></Route>
            <Route
              path="/newprogression"
              element={<NewProgression></NewProgression>}
            ></Route>
            <Route path="/report" element={<Report></Report>}></Route>
            <Route path="/role" element={<Role></Role>}></Route>
            <Route path="/addrole" element={<AddRole></AddRole>}></Route>
            <Route
              path="/updaterole"
              element={<UpdateRole></UpdateRole>}
            ></Route>
            <Route path="/acount" element={<Acount></Acount>}></Route>
            <Route path="/diary" element={<Diary></Diary>}></Route>
            <Route
              path="/addAccount"
              element={<AddAccount></AddAccount>}
            ></Route>
            <Route
              path="/updateaccount"
              element={<UpdateAccount></UpdateAccount>}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
