import React from "react";
import Add from "./Add";

type Props = {};

const TableRightService = (props: Props) => {
  return (
    <div className="w-full mt-4 bg-white rounded-xl">
      <Add></Add>
      <table className="w-full ">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2010001</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Đã hoàn thành</span>
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td>2010001</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Đã hoàn thành</span>
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td>2010001</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Đã hoàn thành</span>
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td>2010001</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Đã hoàn thành</span>
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td>2010001</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Đã hoàn thành</span>
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td>2010001</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Đã hoàn thành</span>
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td>2010001</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Đã hoàn thành</span>
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td>2010001</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Đã hoàn thành</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableRightService;
