import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";

type Props = {};

const DetailServiceInformation = (props: Props) => {
  return (
    <div className="mt-8">
      <div className="flex gap-6 ">
        <DetailLeft></DetailLeft>
        <DetailRight></DetailRight>
      </div>
    </div>
  );
};

export default DetailServiceInformation;
