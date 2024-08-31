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
  console.log(categoryId, typeof categoryId);
  console.log(API_URL);
  try {
    const res = await fetch(`${API_URL}/api/shop/${categoryId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    // Check the content-type to ensure it's JSON
    const contentType = res.headers.get("content-type");
    console.log("Response Content-Type:", contentType);

    // const data = await res.json();
    const data = await res.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error("Error in getItems:", error);
    return []; // Return an empty array or handle the error as needed
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
  console.log(productListData);

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
