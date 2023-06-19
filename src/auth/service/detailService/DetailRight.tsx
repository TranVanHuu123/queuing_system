import InputTime from "../../../components/input/InputTime";
import CustomInputSearchService from "../../../components/input/CustomInputSearchService";
import TableRightService from "../../../components/table/TableRightService";
import NextPage from "../../../components/table/NextPage";

type Props = {};

const DetailRight = (props: Props) => {
  return (
    <div className="max-w-[718px] w-full min-h-[606px] h-full rounded-xl bg-white pt-4 pl-4 pr-4">
      <div className="flex gap-2">
        <div className="flex items-center gap-5">
          <InputTime className="w-[130px]" title="Chọn thời gian"></InputTime>
          <img className="w-[5px] h-[5px]" src="/Vector154.png" alt="Vector" />
          <InputTime className="w-[130px]" title="Chọn thời gian"></InputTime>
        </div>
        <CustomInputSearchService></CustomInputSearchService>
      </div>
      <div>
        <TableRightService></TableRightService>
      </div>
      <NextPage></NextPage>
    </div>
  );
};

export default DetailRight;
