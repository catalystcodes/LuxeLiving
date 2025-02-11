interface SubFooterProps {
  title: string;
  subTitle1: string;
  subTitle2: string;
  subTitle3: string;
  subTitle4?: string;
}

const SubFooter = ({
  title,
  subTitle1,
  subTitle2,
  subTitle3,
  subTitle4,
}: SubFooterProps) => {
  return (
    <div>
      <p className="text-[1.1rem] font-bold mb-5">{title}</p>
      <div className="flex flex-col gap-y-3">
        <p className="text-[0.9rem] font-medium text-[#AFADB5] md:text-black">
          {subTitle1}
        </p>
        <p className="text-[0.9rem] font-medium text-[#AFADB5] md:text-black">
          {subTitle2}
        </p>
        <p className=" text-[0.9rem] font-medium text-[#AFADB5] md:text-black">
          {subTitle3}
        </p>
        <p className="text-[0.9rem] font-medium text-[#AFADB5] md:text-black">
          {subTitle4}
        </p>
      </div>
    </div>
  );
};

export default SubFooter;
