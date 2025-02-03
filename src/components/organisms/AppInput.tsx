const AppInput = ({ text }: { text: string }) => {
  return (
    <div>
      <div className="flex items-center pl-[1.4rem] pr-[0.8rem] py-[0.8rem] bg-white w-[45rem] ">
        <div className="flex items-center gap-x-[1rem] grow">
          <img src="/searchIcon.svg" alt="" />
          <input
            type="text"
            placeholder="Search property"
            className="outline-none"
          />
        </div>

        <button className="bg-[#518581] text-white py-[0.8rem] px-[2.6rem]">
          {text}
        </button>
      </div>
    </div>
  );
};

export default AppInput;

//
