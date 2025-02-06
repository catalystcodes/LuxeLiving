import PagesNum from "../components/organisms/PagesNum";
import TotalProduct from "../components/organisms/TotalProduct";

const Product = () => {
  return (
    <div>
      <p className="text-center text-[3.6rem] font-bold mt-24 mb-5">Products</p>
      <p className="text-center px-[23.3rem] font-medium text-[#AFADB5]">
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </p>
      <div className="mx-[5.5rem]">
        <TotalProduct />
        <PagesNum />
      </div>
    </div>
  );
};

export default Product;
