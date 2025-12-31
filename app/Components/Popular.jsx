import React from "react";

import data_product from "../Components/Assets/data";
import Item from "../Components/Item";
const Popular = () => {
  return (
    <div className="w-full h-screen  py-10 flex flex-col gap-12 items-center justify-center">
      <div>
        {" "}
        <h2 className="text-5xl font-semibold">Popular in Women</h2> <hr className="w-[15vw] h-[0.8vh] rounded-lg mx-auto mt-3  bg-[#252525]" />
      </div>
      <div className="w-full flex gap-4 px-20 ">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            newprice={item.new_price}
            oldprice={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
