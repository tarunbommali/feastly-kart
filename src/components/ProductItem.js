import React from "react";

export default function ProductItem({ itemDetails }) {
  const { name, price, link, imgageUrl } = itemDetails;
  // category, offerPrice
  return (
    <li className="flex flex-col bg-[white] text-black my-1 mx-3 p-2 px-3 rounded-md w-[200px]  hover:scale-[0.95]">
      <div className="w-[280px] h-[100px] rounded-[15px]">
        <img src={imgageUrl} alt={name} className="rounded-sm py-2" />
      </div>
      <p className="font-bold text-lg">{name}</p>
      <p className="font-semibold">{price}</p>
      <button className="border-none outline-none bg-orange-200 rounded-md my-2">
        <a href={link} className="font-semibold py-1">
          Shop Now
        </a>
      </button>
    </li>
  );
}
