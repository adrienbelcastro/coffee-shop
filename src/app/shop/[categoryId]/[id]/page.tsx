import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductOptions from "@/components/ProductOptions";
import SizeSelector from "@/components/SizeSelector";
import API_URL from "./../../../../../utils";

interface Product {
  productId: number;
  name: string;
  description: string;
  sizes_needed: Boolean;
}

interface OptionWithChoices {
  option_id: number;
  option_name: string;
  description: string;
  choices: {
    choice_id: number;
    choice_name: string;
    prices: { price: number }[];
  }[];
}

async function fetchProducts(categoryId: string, id: string) {
  const res = await fetch(`${API_URL}/api/shop/${categoryId}/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({
  params,
}: {
  params: { categoryId: string; id: string };
}) {
  if (!API_URL) {
    return <p>API Is Not Defined</p>;
  }
  const { categoryId, id } = params;

  if (!API_URL) {
    return null;
  }

  const data = await fetchProducts(categoryId, id);

  return (
    <>
      <Header />
      <div className="mt-16 py-16 flex flex-col justify-center items-center gap-8  bg-rose-50 h-max ">
        <h1 className="text-6xl font-light">{data?.product.name}</h1>
        <p className="text-center w-[50%]">{data?.product.description}</p>
      </div>
      <div className=" flex justify-center  gap-44 mt-8 h-[500px] max-h-[500px] max-w-[150px">
        <div className="w-[35%]">
          <h3 className="text-3xl border-b-4 pb-4">Size Options</h3>
          {data.product.sizes_needed ? <SizeSelector /> : null}
        </div>
        <div className="w-[35%]">
          <ProductOptions optionsData={data.options} />
        </div>
      </div>
      <Footer />
    </>
  );
}
