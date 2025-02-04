import React from "react";
import AppButton from "./AppButton";

const OurProduct = () => {
  return (
    <div className="mx-[5.5rem] my-[10rem]">
      <div className="flex justify-between items-end   ">
        <div className="w-[28.4rem]">
          <p className="mb-[0.8rem] font-bold text-[#FFB23F] ">Our Product</p>
          <p className="font-bold text-[2.4rem]">
            Crafted by talented and high quality material
          </p>
        </div>
        <div className="flex gap-x-[2.8rem]">
          <div className="flex flex-col gap-y-[0.6rem]">
            <p className="font-bold text-[2.4rem]">20+</p>
            <p className="font-medium text-[#AFADB5]">Years Experience</p>
          </div>{" "}
          <div className="flex flex-col gap-y-[0.6rem]">
            <p className="font-bold text-[2.4rem]">483</p>
            <p className="font-medium text-[#AFADB5]">Happy Client</p>
          </div>{" "}
          <div className="flex flex-col gap-y-[0.6rem]">
            <p className="font-bold text-[2.4rem]">150+</p>
            <p className="font-medium text-[#AFADB5]">Project Finished</p>
          </div>
        </div>
      </div>
      <div className="flex mt-[2.8rem] items-center justify-between">
        <div className="">
          <p className="w-[32.2rem] text-[#AFADB5] font-medium">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
            morbi fermentum, vivamus et accumsan dui tincidunt pulvinar
          </p>
          <div className="mt-[2.8rem] mb-[2.8rem]">
            <AppButton text="Learn More" />
          </div>
          <img src="/productImage2.svg" alt="" />
        </div>
        <img src="/productPics.svg" alt="" />
      </div>
    </div>
  );
};

export default OurProduct;
