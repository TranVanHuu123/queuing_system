import React from "react";
import Add from "./Add";
import AddNewProgression from "./AddNewProgression";

type Props = {};

const TableServiceManager = (props: Props) => {
  return (
    <div className="w-full mt-4 bg-white rounded-xl">
      <AddNewProgression></AddNewProgression>
      <table className="w-full ">
        <thead>
          <tr>
            <th>Mã thiết bị</th>
            <th>Tên thiết bị</th>
            <th>Địa chỉ IP</th>
            <th>Trạng thái hoạt động</th>
            <th>Trạng thái kết nối </th>
            <th>Dịch vụ sử dụng</th>
            <th>Nguồn cấp</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Ngưng hoạt động</span>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Mất kết nối</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col">
                <div>
                  <span>Khám tim mạch, Khám mắt...</span>
                </div>
                <div className="underline text-blueSer">
                  <a href="q">Xem thêm</a>
                </div>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết</a>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết </a>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-colorGreen"></div>
                <span>Hoạt động</span>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-colorGreen"></div>
                <span>Kết nối</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col">
                <div>
                  <span>Khám tim mạch, Khám mắt...</span>
                </div>
                <div className="underline text-blueSer">
                  <a href="q">Xem thêm</a>
                </div>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết</a>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết </a>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Ngưng hoạt động</span>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Mất kết nối</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col">
                <div>
                  <span>Khám tim mạch, Khám mắt...</span>
                </div>
                <div className="underline text-blueSer">
                  <a href="q">Xem thêm</a>
                </div>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết</a>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết </a>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-colorGreen"></div>
                <span>Hoạt động</span>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-colorGreen"></div>
                <span>Kết nối</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col">
                <div>
                  <span>Khám tim mạch, Khám mắt...</span>
                </div>
                <div className="underline text-blueSer">
                  <a href="q">Xem thêm</a>
                </div>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết</a>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết </a>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Ngưng hoạt động</span>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Mất kết nối</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col">
                <div>
                  <span>Khám tim mạch, Khám mắt...</span>
                </div>
                <div className="underline text-blueSer">
                  <a href="q">Xem thêm</a>
                </div>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết</a>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết </a>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-colorGreen"></div>
                <span>Hoạt động</span>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-colorGreen"></div>
                <span>Kết nối</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col">
                <div>
                  <span>Khám tim mạch, Khám mắt...</span>
                </div>
                <div className="underline text-blueSer">
                  <a href="q">Xem thêm</a>
                </div>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết</a>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết </a>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Ngưng hoạt động</span>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Mất kết nối</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col">
                <div>
                  <span>Khám tim mạch, Khám mắt...</span>
                </div>
                <div className="underline text-blueSer">
                  <a href="q">Xem thêm</a>
                </div>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết</a>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết </a>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-colorGreen"></div>
                <span>Hoạt động</span>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-colorGreen"></div>
                <span>Kết nối</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col">
                <div>
                  <span>Khám tim mạch, Khám mắt...</span>
                </div>
                <div className="underline text-blueSer">
                  <a href="q">Xem thêm</a>
                </div>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết</a>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết </a>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Ngưng hoạt động</span>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red"></div>
                <span>Mất kết nối</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col">
                <div>
                  <span>Khám tim mạch, Khám mắt...</span>
                </div>
                <div className="underline text-blueSer">
                  <a href="q">Xem thêm</a>
                </div>
              </div>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết</a>
            </td>
            <td className="underline text-blueSer">
              <a href="q">Chi tiết </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableServiceManager;
