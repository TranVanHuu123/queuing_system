import React from "react";

type Props = {};

const NextPage = (props: Props) => {
  return (
    <div className="flex text-[16px] leading-[22px]  font-semibold text-gray300 mt-6 justify-end mr-5">
      <div className="flex items-center justify-center w-8 h-8 rounded">
        <img srcSet="/VectorLeft.png 2x" alt="left" />
      </div>
      <div className="flex items-center justify-center w-8 h-8 text-white rounded bg-orange">
        1
      </div>
      <div className="flex items-center justify-center w-8 h-8 rounded">2</div>
      <div className="flex items-center justify-center w-8 h-8 rounded">3</div>
      <div className="flex items-center justify-center w-8 h-8 rounded">4</div>
      <div className="flex items-center justify-center w-8 h-8 rounded">5</div>
      <div className="flex items-center justify-center w-8 h-8 rounded">
        ...
      </div>
      <div className="flex items-center justify-center w-8 h-8 rounded">10</div>
      <div className="flex items-center justify-center w-8 h-8 rounded">
        <img srcSet="/VectorRight.png 2x" alt="Right" />
      </div>
    </div>
  );
};

export default NextPage;
