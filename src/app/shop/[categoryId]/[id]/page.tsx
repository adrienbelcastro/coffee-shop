import React from "react";
import Image from "next/image";
import beans from "../../../../../public/assets/coffeebeans-hero.png";
import Header from "@/components/Header";
import { GiCoffeePot } from "react-icons/gi";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import { DiCoffeescript } from "react-icons/di";
import { FaCartPlus } from "react-icons/fa";
import Footer from "@/components/footer";

const page = () => {
  return (
    <>
      <Header />
      <div className="mt-16 flex justify-center items-center gap-24  bg-rose-50 h-max">
        <Image
          src={beans}
          alt="Coffee Beans"
          className="h-[400px] w-[200px] py-8"
        />
        <h1 className="text-6xl font-light">Cold Brew</h1>
      </div>
      <div className=" flex justify-center  gap-44 mt-8 h-[500px] max-h-[500px] max-w-[150px">
        <div className="w-[35%]">
          <h3 className="text-3xl border-b-4 pb-4">Size Options</h3>
          <div className="flex justify-center gap-4 mt-4">
            <button className="flex flex-col items-center p-4 hover:bg-lightGrey rounded-full focus:bg-rose-50 ">
              <DiCoffeescript className="h-8 w-8" />
              <p>Small</p>
            </button>
            <button className="flex flex-col items-center p-4 hover:bg-lightGrey rounded-full focus:bg-rose-50">
              <BiSolidCoffeeTogo className="h-8 w-8" />
              <p>Medium</p>
            </button>
            <button className="flex flex-col items-center p-4 hover:bg-lightGrey rounded-full focus:bg-rose-50">
              <GiCoffeePot className="h-8 w-8" />
              <p>Large</p>
            </button>
          </div>
        </div>
        <div className="w-[35%]">
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
