import AppSlider from "../molecules/AppSlider";

const ProductSection = () => {
  return (
    <div>
      <div className="mx-[5.5rem]">
        <p className="mb-[0.8rem] font-bold text-[#FFB23F] text-center">
          Products
        </p>
        <p className="text-center text-[2.4rem] font-bold ">
          Our popular product
        </p>
        <p className="text-[#AFADB5] font-medium text-center px-[21.8rem] mt-[1.7rem] mb-[2.8rem]">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>

      <div className="px-2">
        <AppSlider />
      </div>
    </div>
  );
};

export default ProductSection;
