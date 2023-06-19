import React from "react";

type Props = {};

const MainCard = (props: Props) => {
  return (
    <div className="max-w-[791px] w-full h-[484px] bg-white mt-4 rounded-xl  ">
      <img srcSet="/card.png 2x" alt="card" />
    </div>
  );
};

export default MainCard;
