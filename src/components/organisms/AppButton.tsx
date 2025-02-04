interface AppButtonProps {
  text: string;
}

const AppButton = ({ text }: AppButtonProps) => {
  return (
    <button className="bg-[#518581] text-white py-[0.8rem] px-[2.6rem]">
      {text}
    </button>
  );
};

export default AppButton;
