import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import API_URL from "./../../../../utils";

type Product = {
  product_id: string;
  name: string;
};

async function getItems(categoryId: string) {
  const res = await fetch(`http://localhost:3000/api/shop/1`);
  console.log(res.status);
  try {
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Fetch error text:", errorText);
      throw new Error(`Failed to fetch data: ${errorText}`);
    }

    // Log the response before parsing
    const data = await res.json();
    console.log("Response data:", data);

    return data;
  } catch (error) {
    console.error("Error in getItems:", error);
    throw error; // Re-throw the error so it propagates to the caller
  }
}

export default async function Page({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) {
  if (!API_URL) {
    return <p>API Is Not Defined</p>;
  }

  try {
    const productListData = await getItems(categoryId);
    if (!Array.isArray(productListData)) {
      throw new Error("Expected an array of products");
    }

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
  } catch (error: any) {
    console.error("Error fetching product data:", error.message);
    return (
      <>
        <p>error occurred</p>
      </>
    );
  }
}
