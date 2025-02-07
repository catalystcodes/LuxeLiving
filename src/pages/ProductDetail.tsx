import { useParams } from "react-router-dom";
import { productDetails } from "../data";
import AppButton from "../components/organisms/AppButton";

const ProductDetail = ({}) => {
  const { productId } = useParams<{ productId: string }>();
  const product = productDetails.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mx-[5.5rem] mt-[5.5rem] mb-[2.8rem]">
      <div className="flex items-center gap-x-12">
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
            <AppButton text="Add to Cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
