import MainCard from "../../components/dashboardMain/MainCard";
import DashboardMainItem2 from "../../components/dashboardMain/DashboardMainItem2";

type Props = {};

const DashboardMain = (props: Props) => {
  return (
    <div className="absolute max-w-[791px] w-full h-[780px] left-[224px] mt-[28px]">
      <h1 className="text-[20px] leading-[30px] text-orange font-bold">
        Dashboard
      </h1>
      <h2 className="text-[24px] leading-[36px] font-bold text-orange mt-[45px]">
        Biểu đồ cấp số
      </h2>
      <div className="grid grid-cols-4 gap-3">
        <DashboardMainItem2
          img="/start.png 2x"
          title="Số thứ tự
         đã cấp"
          number={4.221}
          numberSmall="32,41%"
        ></DashboardMainItem2>
        <DashboardMainItem2
          img="/phone.png 2x"
          title="Số thứ tự
          đã sử dụng"
          number={3.721}
          numberSmall="32,41%"
        ></DashboardMainItem2>{" "}
        <DashboardMainItem2
          img="/tich.png 2x"
          title="Số thứ tự
          đang chờ"
          number={468}
          numberSmall="56,41%"
        ></DashboardMainItem2>{" "}
        <DashboardMainItem2
          img="/lich.png 2x"
          title="Số thứ tự
          đã bỏ qua"
          number={4.221}
          numberSmall="32,41%"
        ></DashboardMainItem2>
      </div>
      <div>
        <MainCard></MainCard>
      </div>
    </div>
  );
};

export default DashboardMain;
