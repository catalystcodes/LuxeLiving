import { productDetails } from "../../data";
import OurProductCard from "./OurProductCard";

const TotalProduct = () => {
  return (
    <div>
      <div className="md:flex md:items-center md:justify-between ">
        <div className="flex items-center md:my-[2.8rem] my-[1.2rem]">
          <p className="md:text-[2.4rem] text-[1rem] font-bold">
            Total Product
          </p>
          <p className="px-4 py-1 rounded-[1.1rem] bg-[#F9F9F9] font-bold text-[#518581] text-[0.9rem]">
            184
          </p>
        </div>
        <img src="/sortByImage .svg" alt="" className="hidden md:block" />
      </div>
      <div className="flex justify-center flex-wrap md:gap-x-[1.7rem] md:gap-y-[1.7rem] mb-[4.4rem] gap-y-[0.8rem]">
        {productDetails.map((product) => (
          <OurProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default TotalProduct;
