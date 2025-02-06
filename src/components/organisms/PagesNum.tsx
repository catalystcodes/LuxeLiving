const PagesNum = () => {
  return (
    <div className="flex justify-center gap-x-[1.8rem] mb-[5.5rem] ">
      <img src="/ArrowLeft.svg" alt="" />
      <div className="flex items-center">
        <p className="px-[0.9rem] py-[0.3rem] bg-[#518581] border-[#f9f9f9] border-1 text-white">
          {" "}
          1
        </p>
        <p className="px-[0.9rem] py-[0.3rem] border-[#f9f9f9] border-1">2</p>
        <p className="px-[0.9rem] py-[0.3rem] border-[#f9f9f9] border-1">3</p>
        <p>...</p>
        <p className="px-[0.9rem] py-[0.3rem] border-[#f9f9f9] border-1">10</p>
      </div>
      <img src="/ArrowLeft.svg" alt="" className="rotate-180" />
    </div>
  );
};

export default PagesNum;
