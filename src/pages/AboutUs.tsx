import OurMission from "../components/organisms/OurMission";
import OurTeam from "../components/organisms/OurTeam";
import SubFooterMessage from "../components/organisms/SubFooterMessage";

const AboutUs = () => {
  const YouTubeEmbed = ({ videoId }: any) => {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube video"
      />
    );
  };
  return (
    <div className="md:mx-[5.5rem] mt-[2.8rem] mx-[1.4rem]">
      <p className="md:mt-[5.5rem] text-center font-bold md:text-[3.6rem] text-[1.4rem] mb-[1.1rem] ">
        About Us
      </p>
      <p className="text-center font-medium text-[#AFADB5] md:px-[26rem] md:mb-[2.8rem] md:mt-[1.1rem] mb-[1.7rem] text-[0.8rem] md:text-[1rem]">
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </p>

      <div className="flex justify-center mb-[10rem] md:h-[30.6rem] md:w-[68.9rem] m-auto ">
        <YouTubeEmbed videoId="fxTcO_4abyg" />
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
