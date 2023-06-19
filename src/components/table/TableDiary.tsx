import React, { useEffect, useState } from "react";
import Add from "./Add";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase-app/Firebase-config";
import { useNavigate } from "react-router-dom";

type Props = {};

const TableDiary = (props: Props) => {
  const [userList, setUserList] = useState<any>([]);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const colRef = collection(db, "account");

    onSnapshot(colRef, (snapshot) => {
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
  return (
    <div className="w-full mt-4 bg-white rounded-xl">
      <table className="w-full ">
        <thead>
          <tr>
            <th>Tên đăng nhập</th>
            <th>Thời gian tác động</th>
            <th>IP thực hiện</th>
            <th>Thao tác thực hiện</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 &&
            userList.map((user: any) => (
              <tr key={user.id}>
                <td>{user?.nameaccount}</td>
                <td>01/12/2021 15:12:17</td>
                <td>192.168.3.1</td>
                <td>Cập nhật thông tin dịch vụ DV_01</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDiary;
