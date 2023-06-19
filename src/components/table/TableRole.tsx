import React, { useEffect, useState } from "react";
import Add from "./Add";
import AddNewProgression from "./AddNewProgression";
import AddReport from "./AddReport";
import AddRole from "./AddRole";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase-app/Firebase-config";

type Props = {};

const TableRole = (props: Props) => {
  const [roleList, setRoleList] = useState<any>([]);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const colRef = collection(db, "role");
    const newRef = filter ? query(colRef, where("name", "==", filter)) : colRef;
    onSnapshot(newRef, (snapshot) => {
      const results: any[] = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setRoleList(results);
    });
  }, [filter]);
  return (
    <div className="max-w-[1112px] w-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-x-6"></div>
        <div className="mt-[-15px]">
          <div className="">
            <span className="text-[16px] leading-6 font-semibold">Từ khoá</span>
            <div className="relative flex items-center">
              <input
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Nhập từ khóa"
                autoComplete="off"
                className="pl-2 w-[206px] h-[44px] rounded-lg border-[1px] border-solid border-gray"
              ></input>
              <img
                className="w-4 h-4 absolute left-[178px]"
                src="/fi_search.png"
                alt="Vector"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 bg-white rounded-xl">
        <AddRole></AddRole>
        <table className="w-full ">
          <thead>
            <tr>
              <th>Tên vai trò</th>
              <th>Số người dùng</th>
              <th>Mô tả</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {roleList.length > 0 &&
              roleList.map((item: any) => (
                <tr>
                  <td>{item?.name}</td>
                  <td>6</td>
                  <td>{item?.describes}</td>
                  <td className="underline cursor-pointer text-blueSer">
                    <span onClick={() => navigate(`/updaterole?id=${item.id}`)}>
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

export default TableRole;
