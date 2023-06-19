import React, { useEffect, useState } from "react";
import Add from "./Add";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase-app/Firebase-config";
import { Dropdown } from "../dropDown";

type Props = {};

const Table = (props: Props) => {
  const [userList, setUserList] = useState<any>([]);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [connection, setConnection] = useState("");
  const [showFullContent, setShowFullContent] = useState<{
    [id: string]: boolean;
  }>({});

  const handleToggleContent = (id: string) => {
    setShowFullContent((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    const colRef = collection(db, "device");
    const newRef = filter
      ? query(colRef, where("devicecode", "==", filter))
      : colRef;
    onSnapshot(newRef, (snapshot) => {
      const results: any[] = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setUserList(results);
    });
  }, [filter]);

  useEffect(() => {
    const colRef = collection(db, "device");
    const newRef = dropdown
      ? query(colRef, where("status", "==", dropdown))
      : colRef;
    onSnapshot(newRef, (snapshot) => {
      const results: any[] = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setUserList(results);
    });
  }, [dropdown]);

  useEffect(() => {
    const colRef = collection(db, "device");
    const newRef = connection
      ? query(colRef, where("connection", "==", connection))
      : colRef;
    onSnapshot(newRef, (snapshot) => {
      const results: any[] = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setUserList(results);
    });
  }, [connection]);
  const handleDropdownClick = (value: any) => {
    setDropdown(value);
  };
  const handleConnectClick = (value: any) => {
    setConnection(value);
  };
  return (
    <div className="max-w-[1112px] w-full">
      <div className="flex items-center justify-between">
        <div className="flex ">
          <div className="mb-2 mr-[-140px]">
            <span className="text-[16px] leading-6 text-gray500 font-semibold">
              Trạng thái hoạt động
            </span>
            <Dropdown>
              <Dropdown.Select
                className="w-[300px]"
                placeholder={dropdown || "Tất cả"}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option
                  value=""
                  onClick={() => handleDropdownClick("")}
                >
                  Tất cả
                </Dropdown.Option>
                <Dropdown.Option
                  value="Hoạt động"
                  onClick={() => handleDropdownClick("Hoạt động")}
                >
                  Hoạt động
                </Dropdown.Option>
                <Dropdown.Option
                  value="Ngưng hoạt động"
                  onClick={() => handleDropdownClick("Ngưng hoạt động")}
                >
                  Ngưng hoạt động
                </Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </div>
          <div>
            <span className="text-[16px] leading-6 text-gray500 font-semibold">
              Trạng thái kết nối
            </span>
            <Dropdown>
              <Dropdown.Select
                className="w-[300px]"
                placeholder={connection || "Tất cả"}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option
                  value=""
                  onClick={() => handleConnectClick("")}
                >
                  Tất cả
                </Dropdown.Option>
                <Dropdown.Option
                  value="Kết nối"
                  onClick={() => handleConnectClick("Kết nối")}
                >
                  Kết nối
                </Dropdown.Option>
                <Dropdown.Option
                  value="Mất kết nối"
                  onClick={() => handleConnectClick("Mất kết nối")}
                >
                  Mất kết nối
                </Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </div>
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
        <Add></Add>
        <table className="w-full ">
          <thead>
            <tr>
              <th>Mã thiết bị</th>
              <th>Tên thiết bị</th>
              <th>Địa chỉ IP</th>
              <th>Trạng thái hoạt động</th>
              <th>Trạng thái kết nối </th>
              <th>Dịch vụ sử dụng</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userList.length > 0 &&
              userList.map((device: any) => (
                <tr key={device.id}>
                  <td>{device?.devicecode}</td>
                  <td>{device?.namedevice}</td>
                  <td>{device?.ipaddress}</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          device?.status === "Hoạt động"
                            ? "bg-green-500"
                            : "bg-red"
                        } `}
                      ></div>
                      <span>{device?.status}</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          device?.connection === "Kết nối"
                            ? "bg-green-500"
                            : "bg-red"
                        } `}
                      ></div>
                      <span>{device?.connection}</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col">
                      <div>
                        <span>
                          {showFullContent[device.id]
                            ? device.dichvu
                            : device.dichvu.length > 25
                            ? `${device.dichvu.slice(0, 25)}...`
                            : `${device.dichvu}`}
                        </span>
                      </div>
                      <div className="underline cursor-pointer text-blueSer">
                        <span onClick={() => handleToggleContent(device.id)}>
                          {showFullContent[device.id] ? "Ẩn đi" : "Xem thêm"}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="underline cursor-pointer text-blueSer">
                    <span
                      onClick={() => navigate(`/detaildevice?id=${device.id}`)}
                    >
                      Chi tiết
                    </span>
                  </td>
                  <td className="underline cursor-pointer text-blueSer">
                    <span
                      onClick={() => navigate(`/updatedevice?id=${device.id}`)}
                    >
                      Cập nhật
                    </span>
                    {/* <Link to={"/updatedevice"}>Cập nhật</Link> */}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
