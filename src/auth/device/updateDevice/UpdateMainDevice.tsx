import PageDevice from "../../../components/titleDevicePage/PageDevice";
import Avatar from "../../user/Avatar";
import Frame from "../../frame/Frame";
import UpdateDeviceInformation from "./UpdateDeviceInformation";

type Props = {};

const UpdateMainDevice = (props: Props) => {
  return (
    <Frame>
      <div className="mb-[30px]  w-[1240px]   ">
        <div className="relative flex w-full ">
          <div className="flex items-center justify-center gap-x-4">
            <PageDevice title="Thiết bị"></PageDevice>
            <PageDevice title=" Danh sách thiết bị"></PageDevice>
            <span className="text-[20px] leading-[30px] text-orange font-bold">
              Cập nhật thiết bị
            </span>
          </div>
          <div className="absolute right-0 -top-1">
            <Avatar></Avatar>
          </div>
        </div>
      </div>
      <span className="text-[24px] left-9 text-orange font-bold inline-block mb-[16px]">
        Quản lý thiết bị
      </span>
      <UpdateDeviceInformation></UpdateDeviceInformation>
    </Frame>
  );
};

export default UpdateMainDevice;
