import React from "react";
import { FaCartPlus } from "react-icons/fa";

const ProductOptions = () => {
  return (
    <>
      <h3 className="text-3xl border-b-4 pb-4">What's Included</h3>
      <div className="flex flex-col gap-4 w-full mt-4">
        <select className="w-full border-2 rounded-lg p-2">
          <option value="Cream">Cream</option>
          <option value="Milk">Milk</option>
          <option value="Oat Milk">Oat Milk</option>
          <option value="Almond Milk">Almond Milk</option>
        </select>
        <select className="border-2 rounded-lg p-2">
          <option value="Cream">Cream</option>
          <option value="Milk">Milk</option>
          <option value="Oat Milk">Oat Milk</option>
          <option value="Almond Milk">Almond Milk</option>
        </select>
        <select className="border-2 rounded-lg p-2">
          <option value="Cream">Cream</option>
          <option value="Milk">Milk</option>
          <option value="Oat Milk">Oat Milk</option>
          <option value="Almond Milk">Almond Milk</option>
        </select>
      </div>
      <div className="flex justify-end my-8">
        <button className=" rounded-full p-4 bg-rose-50">
          <div className="flex items-center gap-2 ">
            <FaCartPlus /> <h1>Add To Order</h1>
          </div>
        </button>
      </div>
    </>
  );
};

export default ProductOptions;
