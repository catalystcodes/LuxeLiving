import { useParams } from "react-router-dom";
import { productDetails, relatedItemDetails } from "../data";
import AppButton from "../components/organisms/AppButton";
import OurProductCard from "../components/organisms/OurProductCard";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productDetails.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="md:mx-[5.5rem] md:mt-[5.5rem] mx-[1.4rem]  ">
      <div className="flex flex-col md:flex-row md:items-center gap-x-12 mb-[2.8rem]">
        <img src={product.image} alt={product.name} className="h-[33.3rem]" />
        <div>
          <p className="md:text-[2.4rem] font-bold text-[1.3rem]">
            {product.title}
          </p>
          <p className="md:t-2.5 md:mb-7 font-medium text-[#AFADB5]">
            {" "}
            {product.desc}
          </p>
          <p className="font-bold">Color</p>
          <img
            src="/color .svg"
            alt=""
            className="md:my-5 h-[1.7rem] w-[6.7rem] md:h-[2.8rem] md:w-[11.1rem] mt-1.5 mb-5"
          />

          <p className="md:w-[29rem] font-medium text-[#AFADB5] w-[18.2rem]">
            Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
            facilisis facilisis ligula felis et a parturient aenean. Ac maecenas
            ultricies felis risus scelerisque duis posuere...
            <span className="text-[#518581]">Read More</span>
          </p>
          <p className="text-[2.4rem] font-bold mt-7 mb-12">${product.price}</p>
          <div className="flex md:items-center md:gap-x-5 flex-col md:flex-row gap-y-3  ">
            <AppButton text="Book Now" />

            <AppButton
              text="Add to Cart"
              backgroundColor=""
              textColor="#151411"
              border="1px solid #e9e7e7"
            />
          </div>
        </div>
      </div>
      <p className="font-bold md:text-[1.8rem] md:mb-7 mb-[1.3rem]">
        Related Items
      </p>
      <div className="flex md:justify-center flex-col md:flex-row md:gap-x-7 mb-[5.5rem]  gap-y-7 ">
        {relatedItemDetails.map((product) => (
          <OurProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
