import Image from "next/image";
import React from "react";
import exclusive_image from "../Components/Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers w-full px-20 pb-16">
      <div className=" bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] w-full h-[70vh] flex justify-between items-center px-16 ">
        <div className="offers-left">
          <h1 className="text-7xl font-semibold">Exclusive</h1>
          <h1 className="text-7xl my-2 font-semibold">Offers For You</h1>
          <p className="text font-semibold"> ONLY ON BEST SELLER PRODUCTS</p>
          <button className=" py-2.5 px-14 bg-[#F53F3D] rounded-full text-white w-max items-center gap-2 cursor-pointer mt-3">Check Now</button>
        </div>
        <div className="offers-right">
          <Image src={exclusive_image} alt="Offers" width={270} height={270} />
        </div>
      </div>
    </div>
  );
};

export default Offers;
