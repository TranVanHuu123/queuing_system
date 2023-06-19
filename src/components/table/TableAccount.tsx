import React, { useEffect, useState } from "react";
import Add from "./Add";
import AddAccount from "./AddAccount";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase-app/Firebase-config";
// import Customdropdown from "../dropDown/Customdropdown";
import { Dropdown } from "../dropDown";

type Props = {};

const TableAccount = (props: Props) => {
  const [accountList, setAccountList] = useState<any>([]);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [connection, setConnection] = useState("");

  useEffect(() => {
    const colRef = collection(db, "account");
    const newRef = filter
      ? query(colRef, where("nameaccount", "==", filter))
      : colRef;
    onSnapshot(newRef, (snapshot) => {
      const results: any[] = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setAccountList(results);
    });
  }, [filter]);
  useEffect(() => {
    const colRef = collection(db, "account");
    const newRef = connection
      ? query(colRef, where("roles.name", "==", connection))
      : colRef;
    onSnapshot(newRef, (snapshot) => {
      const results: any[] = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setAccountList(results);
    });
  }, [connection]);
  const handleConnectClick = (value: any) => {
    setConnection(value);
  };
  return (
    <div className="max-w-[1112px] w-full">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[16px] leading-6 text-gray500 font-semibold">
            Tên vai trò
          </span>
          <Dropdown>
            <Dropdown.Select
              className="w-[300px]"
              placeholder={connection || "Tất cả"}
            ></Dropdown.Select>
            <Dropdown.List>
              <Dropdown.Option value="" onClick={() => handleConnectClick("")}>
                Tất cả
              </Dropdown.Option>
              <Dropdown.Option
                value="Kế toán"
                onClick={() => handleConnectClick("Kế toán")}
              >
                Kế toán
              </Dropdown.Option>
              <Dropdown.Option
                value="Quản lý"
                onClick={() => handleConnectClick("Quản lý")}
              >
                Quản lý
              </Dropdown.Option>
              <Dropdown.Option
                value="Admin"
                onClick={() => handleConnectClick("Admin")}
              >
                Admin
              </Dropdown.Option>
            </Dropdown.List>
          </Dropdown>
        </div>

        <div className="mt-[-15px]">
          <div className="">
            <span className="text-[16px] leading-6 font-semibold">Từ khoá</span>
            <div className="relative flex items-center">
              <input
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Nhập từ khóa"
                autoComplete="off"
                className="pl-2 w-[300px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
              ></input>
              <img
                className="w-4 h-4 absolute left-[269px]"
                src="/fi_search.png"
                alt="Vector"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 bg-white rounded-xl">
        <AddAccount></AddAccount>
        <table className="w-full ">
          <thead>
            <tr>
              <th>Tên đăng nhập</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Vai trò</th>
              <th>Trạng thái kết nối </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {accountList.length > 0 &&
              accountList.map((item: any) => (
                <tr>
                  <td>{item?.nameaccount}</td>
                  <td>{item?.fullname}</td>
                  <td>{item?.telephone}</td>
                  <td>{item?.email}</td>
                  <td>{item?.roles?.name}</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item?.listStatus?.name === "Hoạt động"
                            ? "bg-green-500"
                            : "bg-red"
                        } `}
                      ></div>
                      <span>{item?.listStatus?.name}</span>
                    </div>
                  </td>
                  <td className="underline cursor-pointer text-blueSer">
                    <span
                      onClick={() => navigate(`/updateaccount?id=${item.id}`)}
                    >
                      Cập nhật
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableAccount;
