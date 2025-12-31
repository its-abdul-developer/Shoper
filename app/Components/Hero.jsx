import Image from "next/image";
import React from "react";
import hand_icon from "../Components/Assets/hand_icon.png";
import arrow_icon from "../Components/Assets/arrow.png";
import hero_image from "../Components/Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="Hero w-full h-screen bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] flex justify-between items-center px-16  ">
      <div className="hero-left ">
        <h2 className="font-medium text-sm"> NEW ARRIVALS ONLY</h2>

        <div> 
          <div className="hand-hand-icon flex items-center gap-3">
            <p className="text-7xl font-semibold">new</p>
            <Image src={hand_icon} alt="Hand Icon" width={60} height={10} className="mt-3"/>
          </div>
          <p className="text-7xl font-semibold">collections</p>
          <p className="text-7xl font-semibold">for everyone</p>
        </div>
        <div className="hero-latest-btn flex py-2 px-6 bg-[#F53F3D] rounded-full text-white w-max items-center gap-2 cursor-pointer mt-3">
          <div className="text-sm">Latest Collection</div>
          <Image
            src={arrow_icon}
            alt="arrow Icon"
            width={15}
            height={15}
            
          />
        </div>
      </div>
      <div className="hero-right flex-2 flex justify-center items-center">
        <Image src={hero_image} alt="Hero Image" width={380} height={380} />
      </div>
    </div>
  );
};

export default Hero;
