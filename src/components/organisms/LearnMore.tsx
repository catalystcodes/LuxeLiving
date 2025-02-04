import AppButton from "./AppButton";

const LearnMore = () => {
  return (
    <div className="flex items-center mx-[5.5rem] justify-between mb-[4.8rem]">
      <p className="font-bold text-[2.4rem]">
        Join with me to get special discount
      </p>
      <AppButton text="Learn More" image="/arrow-right.svg" />
    </div>
  );
};

export default LearnMore;
