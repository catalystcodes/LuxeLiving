import AppButton from "../components/organisms/AppButton";
import DailyNews from "../components/organisms/DailyNews";
import SubFooterMessage from "../components/organisms/SubFooterMessage";
import TrendingTopic from "../components/organisms/TrendingTopic";

const Articles = () => {
  return (
    <section className="mx-[5.5rem]">
      <DailyNews />
      <TrendingTopic />
      <div className="mb-[4.7rem]">
        <SubFooterMessage
          message="Subscribe our newsletter"
          text="Let’s Talk"
          image="/arrow-right.svg"
        />
      </div>
    </section>
  );
};

export default Articles;
