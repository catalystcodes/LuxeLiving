import AppButton from "./AppButton";

const SubFooterMessage = ({
  text,
  message,
  w,
  image,
}: {
  text: string;
  message: string;
  w?: string;
  image?: string;
}) => {
  return (
    <div
      className="flex
	items-center justify-between"
    >
      <p className="text-[2.4rem] font-bold " style={{ width: w }}>
        {message}
      </p>
      <AppButton text={text} image={image} />
    </div>
  );
};

export default SubFooterMessage;
