import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-app/Firebase-config";

type Props = {};

const CustomInputSearch = ({ ...props }: Props) => {
  const [userList, setUserList] = useState<any>([]);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

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
  return (
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
  );
};

export default CustomInputSearch;
