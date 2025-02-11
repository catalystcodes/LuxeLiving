import AppButton from "./AppButton";
import StatsOfProduct from "./StatsOfProduct";

const OurProduct = () => {
  return (
    <div className="md:mx-[5.5rem] md:my-[10rem] my-[5.6rem] mx-[1.7rem]">
      <div className="flex justify-between items-end   ">
        <div className="md:w-[28.4rem]">
          <p className="mb-[0.8rem] font-bold text-[#FFB23F] ">Our Product</p>
          <p className="font-bold md:text-[2.4rem] text-[1.3rem] w-[15.5rem]">
            Crafted by talented and high quality material
          </p>
        </div>
        <div className="hidden md:block">
          <StatsOfProduct />
        </div>
      </div>
      <div className="flex mt-[2.8rem] flex-col md:flex-row md:items-center md:justify-between">
        <div className="">
          <p className="w-[32.2rem] text-[#AFADB5] font-medium">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
            morbi fermentum, vivamus et accumsan dui tincidunt pulvinar
          </p>
          <div className="mt-[2.8rem] mb-[2.8rem]">
            <AppButton text="Learn More" />
          </div>
          <div className="md:hidden mt-[1.7rem] mb-[2.8rem]">
            <StatsOfProduct />
          </div>
          <div>
            <img src="/productImage2.svg" alt="" className="md:block hidden" />
            <img src="/ourProductSm1.svg" alt="" />
          </div>
        </div>
        <div className="md:hidden py-2.5"></div>
        <div>
          <img src="/productPics.svg" alt="" className="md:block hidden" />
          <img src="/OurProductSm2.svg" alt="" />
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default OurProduct;
