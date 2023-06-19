import Frame from "../../frame/Frame";
import Avatar from "../../user/Avatar";
import PageDevice from "../../../components/titleDevicePage/PageDevice";
import DeviceInformation from "../DeviceInformation";

type Props = {};

const AddDeviceMain = (props: Props) => {
  return (
    <Frame>
      <div className="mb-[30px]  w-[1240px]   ">
        <div className="relative flex w-full ">
          <div className="flex items-center justify-center gap-x-4">
            <PageDevice title="Thiết bị"></PageDevice>
            <PageDevice title=" Danh sách thiết bị"></PageDevice>
            <span className="text-[20px] leading-[30px] text-orange font-bold">
              Thêm thiết bị
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
      <DeviceInformation></DeviceInformation>
    </Frame>
  );
};

export default AddDeviceMain;
