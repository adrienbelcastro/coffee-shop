"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "../../../../../node_modules/next/navigation";
import ProductOptions from "@/components/ProductOptions";
import SizeSelector from "@/components/SizeSelector";

const Page = () => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log(typeof id);
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
  }, [categoryId, id]);

  return (
    <>
      <Header />
      <div className="mt-16 py-16 flex flex-col justify-center items-center gap-8  bg-rose-50 h-max ">
        <h1 className="text-6xl font-light">{data.product?.name}</h1>
        <p className="text-center w-[50%]">{data.product?.description}</p>
      </div>
      <div className=" flex justify-center  gap-44 mt-8 h-[500px] max-h-[500px] max-w-[150px">
        <div className="w-[35%]">
          <h3 className="text-3xl border-b-4 pb-4">Size Options</h3>
          {data.product && data.product.sizes_needed ? (
            <SizeSelector sizes={data} />
          ) : null}
        </div>
        <div className="w-[35%]">
          <ProductOptions optionsData={data.options} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
