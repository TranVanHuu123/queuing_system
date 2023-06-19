type Props = {
  img: string;
  serviceImg: string;
  service: string;
  color: string;
  roudedImg: string;
  numberHeader: string;
  numberFirst: string;
  numberTwo: string;
  numberThree: string;
};

const MenuRightItem2 = ({ ...props }: Props) => {
  return (
    <div className="w-full ">
      <div className="w-full py-[11px] px-4 rounded-[15px] flex justify-between  shadowitem mt-3">
        <div>
          <img srcSet={props.img} alt="img" />
        </div>
        <div className="-ml-2">
          <span className="leading-[36px] text-[24px] font-[800] text-gray400text">
            {props.numberFirst}
          </span>
          <span
            className={`flex items-center ${
              props.color || "greenSer"
            } gap-[2px]`}
          >
            <img
              className="w-[14px] h-[14px] "
              srcSet={props.serviceImg}
              alt="minitor"
            />
            {props.service}
          </span>
        </div>
        <div className="flex my-auto gap-x-7">
          <div className="">
            <div className="flex items-center justify-center ">
              <img className="w-1 h-1" srcSet={props.roudedImg} alt="img" />
              <span className="text-[12px] leading-[21px] text-gray300 ml-1 mr-3">
                Đã sử dụng
              </span>
            </div>
            <div className="flex items-center justify-center -ml-[19px]">
              <img className="w-1 h-1 " srcSet="/Frame625215.png" alt="img" />
              <span className="text-[12px] leading-[21px] text-gray300 ml-1 mr-1">
                Đang chờ
              </span>
            </div>
            <div className="flex items-center justify-center -ml-[30px]">
              <img className="w-1 h-1 " srcSet="/Frame625214.png" alt="img" />
              <span className="text-[12px] leading-[21px] text-gray300 ml-1 mr-1">
                Bỏ qua
              </span>
            </div>
          </div>
          <div>
            <div className="mb-1">
              <h3
                className={`text-[14px] leading-[18px] font-bold ${
                  props.color || "text-greenSer"
                }`}
              >
                {props.numberFirst}
              </h3>
            </div>
            <div className="mb-1">
              <h3
                className={`text-[14px] leading-[18px] font-bold ${
                  props.color || "text-greenSer"
                }`}
              >
                {props.numberTwo}
              </h3>
            </div>
            <div>
              <h3
                className={`text-[14px] leading-[18px] font-bold ${
                  props.color || "text-greenSer"
                }`}
              >
                {props.numberThree}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuRightItem2;
