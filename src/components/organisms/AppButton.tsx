interface AppButtonProps {
  text: string;
  image?: string;
  backgroundColor?: string;
  border?: string;
  textColor?: string;
}
const AppButton = ({
  text,
  image,
  backgroundColor = "#518581",
  textColor = "#fff",
  border = "none",
}: AppButtonProps) => {
  return (
    <button
      className="flex justify-center items-center gap-x-[1rem] py-[0.8rem] px-[2.6rem] cursor-pointer"
      style={{ backgroundColor, border }}
    >
      <p className="font-bold" style={{ color: textColor }}>
        {text}
      </p>
      {image && <img src={image} alt={`${text} icon`} />}
    </button>
  );
};

export default AppButton;
