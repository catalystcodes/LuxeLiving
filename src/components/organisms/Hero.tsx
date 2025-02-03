import "../../pages/Home.css";
import AppInput from "./AppInput";

const Hero = () => {
  return (
    <div className="mx-[5.5rem] ">
      <div className=" mx-[21rem] mt-[5.5rem]">
        <p className=" text-[3.5rem] text-center font-bold ">
          Discover Furniture With High Quality Wood
        </p>
      </div>
      <div className="relative">
        <p className="px-[20.9rem] text-center text-[#AFADB5] mt-[1.7rem] mb-[5.1rem] ">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non. Purus parturient viverra nunc,
          tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.
        </p>
        <img src="/bg1.svg" alt="" className="absolute -top-36 left-26" />
      </div>

      <div className="relative">
        <div className="absolute -top-[2.3rem] left-[18.7rem]">
          <AppInput text="Search" />
        </div>
        <div className="flex justify-center mb-[10rem]">
          <img src="/bg2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
