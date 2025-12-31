import React from "react";
import Image from "next/image";

const Item = (props) => {
  return (
    <div className="w-full cursor-pointer  ">
      <div className="relative h-[50vh] w-full ">
        <Image
          src={props.image}
          alt={props.name || "Product Image"}
          fill
          className="object-cover object-left-top hover:scale-105 transition-all duration-300 "
        />
      </div>
      <p className="text-[1.6vh] font-medium mt-2">{props.name}</p>
      <p className="text-xs">Peplum Hem Blouse</p>
      <div className="flex gap-6">
        <p className="text-xs">${props.newprice}</p>
        <p className="text-xs text-decoration-line: line-through text-gray-400">${props.oldprice}</p>
      </div>
    </div>
  );
};

export default Item;
