import OurMission from "../components/organisms/OurMission";
import OurTeam from "../components/organisms/OurTeam";
import SubFooterMessage from "../components/organisms/SubFooterMessage";

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
      <OurTeam />
      <div className="mt-[10rem] mb-[4.8rem]">
        <SubFooterMessage
          message="Are you interested work with us?"
          text="Let’s Talk"
          image="/arrow-right.svg"
          w="21.9rem"
        />
      </div>
    </div>
  );
};
export default AboutUs;
