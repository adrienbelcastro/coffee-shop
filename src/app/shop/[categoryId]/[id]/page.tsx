"use client";

import React from "react";
import Header from "@/components/Header";
import { GiCoffeePot } from "react-icons/gi";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import { DiCoffeescript } from "react-icons/di";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { useParams } from "../../../../../node_modules/next/navigation";
import ProductOptions from "@/components/ProductOptions";

const page = () => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await fetch(
          `http://localhost:3000/api/shop/${categoryId}/${id}`
        );
        const data = await result.json();
        setData(data || []);
      } catch (error) {
        console.error("Error fetching data on the client:", error.message);
      }
    };
    if (categoryId) {
      fetchProducts();
    }
  }, [categoryId]);

  return (
    <>
      <Header />
      {data.length > 0 && (
        <div className="mt-16 py-16 flex flex-col justify-center items-center gap-8  bg-rose-50 h-max">
          <h1 className="text-6xl font-light">{data[0].name}</h1>
          <p>{data[0].description}</p>
        </div>
      )}
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
          <ProductOptions options={data} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
