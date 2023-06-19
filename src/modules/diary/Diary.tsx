import React from "react";
import DiaryList from "../../auth/setting/diary/DiaryList";

type Props = {};

const Diary = (props: Props) => {
  return (
    <div className="relative">
      <DiaryList></DiaryList>
    </div>
  );
};

export default Diary;
