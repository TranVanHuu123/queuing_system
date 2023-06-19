type Props = {};

const DateTime = (props: Props) => {
  return (
    <div className="max-w-[353px] w-full h-[336px] mt-5 shadowitem p-4 rounded-xl">
      <img
        className="object-cover w-full h-full"
        srcSet="/time.png 2x"
        alt="time"
      />
    </div>
  );
};

export default DateTime;
