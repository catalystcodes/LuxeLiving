import OurMission from "../components/organisms/OurMission";

const AboutUs = () => {
  return (
    <div className="mx-[5.5rem]">
      <p className="mt-[5.5rem] text-center font-bold text-[3.6rem]">
        About Us
      </p>
      <p className="text-center font-medium text-[#AFADB5] px-[26rem] mb-[2.8rem] mt-[1.1rem]">
        The product crafted by talented crafter and using high quality material
        with love inside
      </p>
      {/* <div className="flex justify-center">
        <div className=" bg-[url(/videoPlayerBg.svg)] h-[30.6rem] w-[68.9rem]"></div>
      </div> */}
      <div className="flex justify-center mb-[10rem]">
        <img src="/videoPlayerBg.svg" alt="" />
      </div>
      <OurMission />
    </div>
  );
};
export default AboutUs;
