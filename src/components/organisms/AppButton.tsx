interface AppButtonProps {
  text: string;
  image?: string;
}

const AppButton = ({ text, image }: AppButtonProps) => {
  return (
    <button className="flex items-center gap-x-[1rem] bg-[#518581] text-white py-[0.8rem] px-[2.6rem]">
      {text}
      <img src={image} alt="" />
    </button>
  );
};

export default AppButton;
