import PagesNum from "../components/organisms/PagesNum";
import TotalProduct from "../components/organisms/TotalProduct";

const Product = () => {
  return (
    <div>
      <p className="text-center md:text-[3.6rem] font-bold md:mt-24 md:mb-5 text-[1.4rem] mt-[2.8rem] mb-[1.1rem]">
        Products
      </p>
      <p className="text-center font-medium text-[#AFADB5] w-[18.2rem] md:w-[33.3rem] m-auto">
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </p>
      <div className="md:mx-[5.5rem] mx-[1.4rem]">
        <TotalProduct />
        <PagesNum />
      </div>
    </div>
  );
};

export default Product;
