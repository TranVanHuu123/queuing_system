import Menu from "../menu/Menu";
import { auth } from "../../firebase-app/Firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate, Outlet } from "react-router-dom";

type Props = {};

const Menubar = (props: Props) => {
  const navvigate = useNavigate();
  const handleSignOut = async () => {
    await signOut(auth);
    navvigate("/");
  };
  return (
    <div className="relative">
      <div className="absolute bg-white max-w-[200px] w-full  top-0 left-0 min-h-screen rounded-md  border-gray shadow-lg">
        <div className="flex items-center justify-center mt-8">
          <img srcSet="/monkey.png 2x" alt="monkey" />
        </div>
        <Menu></Menu>
        <div className="flex justify-center items-center mt-[450px]">
          <button
            onClick={handleSignOut}
            className=" flex justify-center items-center gap-3 w-[176px] h-[48px]  rounded-lg bg-[#a4d96c] text-white"
          >
            <img srcSet="/logout.png 2x" alt="logout" />
            Đăng xuất
          </button>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Menubar;
