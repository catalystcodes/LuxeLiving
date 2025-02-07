interface AppButtonProps {
  text: string;
  image?: string;
  backgroundColor?: string;
  textColor?: string;
}
const AppButton = ({
  text,
  image,
  backgroundColor = "#518581",
  textColor = "#fff",
}: AppButtonProps) => {
  return (
    <button
      className="flex items-center gap-x-[1rem] py-[0.8rem] px-[2.6rem]"
      style={{ backgroundColor }}
    >
      <p className="font-bold" style={{ color: textColor }}>
        {text}
      </p>
      {image && <img src={image} alt={`${text} icon`} />}
    </button>
  );
};

export default AppButton;
