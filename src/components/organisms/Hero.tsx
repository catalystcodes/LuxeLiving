import "../../pages/Home.css";
import AppInput from "./AppInput";

const Hero = () => {
  return (
    <div className="md:mx-[5.5rem]  mx-[1.7rem] ">
      <div className="  mt-[5.5rem] relative">
        <p className=" md:min-w-[40.2rem] md:w-[50%] m-auto md:text-[3.5rem] text-center font-bold text-[1.9rem] w-[21.4rem] ">
          Discover Furniture With High Quality Wood
        </p>
        <img src="/bg1.svg" alt="" className="absolute bottom-0 left-0" />
      </div>
      <p className="md:w-[44.2rem] m-auto text-center text-[#AFADB5] mt-[1.7rem] mb-[5.1rem] w-[18.2rem] ">
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non. Purus parturient viverra nunc,
        tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.
      </p>

      <div className="md:relative flex flex-col gap-y-[1.7rem] ">
        <div className="md:absolute md:-top-[2.3rem] md:left-[18.7rem] md:w-[45rem] ">
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
