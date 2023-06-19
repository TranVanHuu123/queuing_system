import React from "react";
import Add from "./Add";
import AddNewProgression from "./AddNewProgression";
import AddReport from "./AddReport";

type Props = {};

const TableReport = (props: Props) => {
  return (
    <div className="w-full mt-4 bg-white rounded-xl">
      <AddReport></AddReport>
      <table className="w-full ">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Tên dịch vụ</th>
            <th>Thời gian cấp</th>
            <th>Tình trạng</th>
            <th>Nguồn cấp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                <span>Đang chờ</span>
              </div>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                <span>Đang chờ</span>
              </div>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                <span>Đang chờ</span>
              </div>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                <span>Đang chờ</span>
              </div>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                <span>Đang chờ</span>
              </div>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                <span>Đang chờ</span>
              </div>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                <span>Đang chờ</span>
              </div>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                <span>Đang chờ</span>
              </div>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                <span>Đang chờ</span>
              </div>
            </td>
            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                <span>Đang chờ</span>
              </div>
            </td>
            <td>Kiosk</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableReport;
