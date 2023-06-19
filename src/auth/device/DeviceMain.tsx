import Avatar from "../user/Avatar";
import Table from "../../components/table/Table";
import NextPage from "../../components/table/NextPage";
import Frame from "../frame/Frame";

type Props = {};

const DeviceMain = (props: Props) => {
  return (
    <Frame>
      <div className="mb-[30px] max-w-[1240px] w-full flex  gap-x-[642px] justify-center items-center">
        <div className="flex gap-x-4">
          <div className="flex items-center justify-center gap-x-4">
            <span className="text-[20px] leading-[30px] text-gray300 font-bold ">
              Thiết bị
            </span>
            <img
              className="w-[5px] h-[9px]"
              srcSet="/Vector323.png 1x"
              alt="vector"
            />
          </div>
          <span className="text-[20px] leading-[30px] text-orange font-bold">
            Danh sách thiết bị
          </span>
        </div>
        <Avatar></Avatar>
      </div>
      <span className="text-[24px] left-9 text-orange font-bold inline-block mb-[16px]">
        Danh sách thiết bị
      </span>
      <Table></Table>
      <NextPage></NextPage>
    </Frame>
  );
};

export default DeviceMain;
