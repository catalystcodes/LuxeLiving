const StatsOfProduct = () => {
  return (
    <div>
      <div className="flex md:gap-x-[2.8rem] gap-x-[1.1rem] ">
        <div className="flex flex-col gap-y-[0.6rem]">
          <p className="font-bold text-[1.2rem] md:text-[2.4rem]">20+</p>
          <p className="font-medium text-[#AFADB5]">Years Experience</p>
        </div>{" "}
        <div className="flex flex-col gap-y-[0.6rem]">
          <p className="font-bold text-[1.2rem] md:text-[2.4rem]">483</p>
          <p className="font-medium text-[#AFADB5]">Happy Client</p>
        </div>{" "}
        <div className="flex flex-col gap-y-[0.6rem]">
          <p className="font-bold text-[1.2rem] md:text-[2.4rem]">150+</p>
          <p className="font-medium text-[#AFADB5]">Project Finished</p>
        </div>
      </div>
    </div>
  );
};

export default StatsOfProduct;
