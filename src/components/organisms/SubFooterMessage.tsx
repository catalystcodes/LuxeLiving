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
    <div className="flex md:items-center md:justify-between flex-col md:flex-row">
      <p
        className="text-[1.3rem] md:text-[2.4rem] font-bold "
        style={{ width: w }}
      >
        {message}
      </p>
      <AppButton text={text} image={image} />
    </div>
  );
};

export default SubFooterMessage;
