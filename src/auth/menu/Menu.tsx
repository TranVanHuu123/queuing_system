import React from "react";
import { NavLink } from "react-router-dom";
type Props = {};

const Menu = (props: Props) => {
  return (
    <>
      <div className="mt-[58px]">
        <ul className="list-none leading-24 text-4">
          <li>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive ? "link-active  " : "alink"
              }
            >
              <img
                className="menu-icon"
                srcSet="/element4.png 2x"
                alt="element"
              />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/device"}
              className={({ isActive }) =>
                isActive ? "link-active " : "alink"
              }
            >
              <img
                className="menu-icon"
                srcSet="/monitor123.png 2x"
                alt="monitor"
              />
              Thiết bị
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/service"}
              className={({ isActive }) =>
                isActive ? "link-active " : "alink"
              }
            >
              <img
                className="menu-icon"
                srcSet="/Frame332.png 2x"
                alt="frame"
              />
              Dịch vụ
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/progression"}
              className={({ isActive }) =>
                isActive ? "link-active " : "alink"
              }
            >
              <img className="menu-icon" srcSet="/icon3.png 2x" alt="icon" />
              Cấp số
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/report"}
              className={({ isActive }) =>
                isActive ? "link-active " : "alink"
              }
            >
              <img className="menu-icon" srcSet="/Frame.png 3x" alt="frame" />
              Báo cáo
            </NavLink>
          </li>
          <li className="menu-dropdown">
            <NavLink
              to={""}
              className={({ isActive }) => (isActive ? " alinks" : "alinks")}
            >
              <img
                className="menu-icon"
                srcSet="/setting.png 2x"
                alt="setting"
              />
              Cài đặt hệ thống :
            </NavLink>
            <ul className="flex flex-col list-item-drop">
              <NavLink
                to={"/role"}
                className={({ isActive }) =>
                  isActive ? "link-dropdown-hover " : "link-dropdown"
                }
              >
                Quản lý vai trò
              </NavLink>
              <NavLink
                to={"/acount"}
                className={({ isActive }) =>
                  isActive ? "link-dropdown-hover " : "link-dropdown"
                }
              >
                Quản lý tài khoản
              </NavLink>
              <NavLink
                to={"/diary"}
                className={({ isActive }) =>
                  isActive ? "link-dropdown-hover " : "link-dropdown"
                }
              >
                Nhật ký người dùng
              </NavLink>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
