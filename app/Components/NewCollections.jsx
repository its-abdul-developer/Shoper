import React from "react";
import new_collections from "./Assets/new_collections";
import Item from "../Components/Item";

const NewCollections = () => {
  return (
    <div className="w-full  py-10 flex flex-col gap-12 items-center justify-center">
      <div>
        {" "}
        <h2 className="text-5xl font-semibold">New Collections</h2>{" "}
        <hr className="w-[15vw] h-[0.5vh] rounded-lg mx-auto mt-3  bg-[#252525]" />
      </div>
      <div className=" flex flex-wrap gap-6  px px-20 ">
        {new_collections.map((item, i) => (
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

export default NewCollections;
