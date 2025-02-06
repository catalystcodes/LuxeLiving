import { productDetails } from "../../data";
import OurProductCard from "./OurProductCard";

const TotalProduct = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center my-[2.8rem]">
          <p className="text-[2.4rem] font-bold">Total Product</p>
          <p className="px-4 py-1 rounded-[1.1rem] bg-[#F9F9F9] font-bold text-[#518581] text-[0.9rem]">
            184
          </p>
        </div>
        <img src="/sortByImage .svg" alt="" />
      </div>
      <div className="flex justify-center flex-wrap gap-x-[1.7rem] gap-y-[1.7rem] mb-[4.4rem]">
        {productDetails.map((product, index) => (
          <OurProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default TotalProduct;
