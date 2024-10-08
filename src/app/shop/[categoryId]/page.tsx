import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "../../../../node_modules/next/link";
import API_URL from "./../../../../utils";

type Product = {
  product_id: string;
  name: string;
};

async function getItems(categoryId: string) {
  try {
    const res = await fetch(`${API_URL}/api/shop/${categoryId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error in getItems:", error);
    return [];
  }
}

export default async function Page({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) {
  console.log(categoryId);
  if (!API_URL) {
    return <p>API Is Not Defined</p>;
  }

  const productListData = await getItems(categoryId);

  return (
    <>
      <Header />
      <div className="flex justify-center  bg-lightGrey h-[518px]">
        <div className="m-8 ">
          <h3 className="text-center text-3xl font-light mx-0 my-4 py-4  border-b-2 border-black">
            Menu
          </h3>
          <div className="grid grid-cols-2 gap-y-8 gap-x-64">
            {productListData.map((product: Product) => (
              <Link
                key={product.product_id}
                href={`/shop/${categoryId}/${product.product_id}`}
              >
                <div className="flex gap-4 items-center">
                  <div className="bg-white w-24 h-24 p-4 border-2 border-white rounded-[50%]"></div>
                  <h3>{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
