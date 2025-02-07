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
    <div className="mx-[5.5rem] mt-[5.5rem] ">
      <div className="flex items-center gap-x-12 mb-[2.8rem]">
        <img src={product.image} alt={product.name} className="h-[33.3rem]" />
        <div>
          <p className="text-[2.4rem] font-bold">{product.title}</p>
          <p className="mt-2.5 mb-7 font-medium text-[#AFADB5]">
            {" "}
            {product.desc}
          </p>
          <p className="font-bold">Color</p>
          <img src="/color .svg" alt="" className="my-5" />

          <p className="w-[29rem] font-medium text-[#AFADB5]">
            Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
            facilisis facilisis ligula felis et a parturient aenean. Ac maecenas
            ultricies felis risus scelerisque duis posuere...
            <span className="text-[#518581]">Read More</span>
          </p>
          <p className="text-[2.4rem] font-bold mt-7 mb-12">${product.price}</p>
          <div className="flex items-center gap-x-5 ">
            <AppButton text="Book Now" />
            <div className="border-[#e9e7e7] border-2">
              <AppButton
                text="Add to Cart"
                backgroundColor=""
                textColor="#151411"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="font-bold text-[1.8rem] mb-7">Related Items</p>
      <div className="flex justify-center gap-x-7 mb-[5.5rem]">
        {relatedItemDetails.map((product) => (
          <OurProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
