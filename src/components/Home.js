import React, { useState, useEffect } from "react";
import { productsList } from "../utils/productsList";
import ProductItem from "./ProductItem";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProducts(productsList);
    } else {
      const filtered = productsList.filter((item) => item.category === filter);
      setFilteredProducts(filtered);
    }
  }, [filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const renderProducts = () => {
    return (
      <ul className="flex flex-wrap py-3 my-3">
        {filteredProducts.map((item, index) => (
          <ProductItem key={index} itemDetails={item} />
        ))}
      </ul>
    );
  };

  const renderFilter = () => {
    return (
      <form className="text-black">
        <select
          id="category"
          name="category"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="all">All</option>
          <option value="Fashion">Fashion</option>
          <option value="Food">Food</option>
          <option value="Electronics">Electronics</option>
          <option value="Education">Education</option>
          <option value="Home & Kitchen">Home & Kitchen</option>
          <option value="Finance">Finance</option>
          <option value="Health & Beauty">Health & Beauty</option>
          <option value="Pharmacy">Pharmacy</option>
          <option value="Travel">Travel</option>
        </select>
      </form>
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-3 text-white">
      <div className="flex flex-col bg-slate-50 w-[80%] my-2 py-2 min-h-screen">
        {renderFilter()}
        {renderProducts()}
      </div>
    </div>
  );
}
