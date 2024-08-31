import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import API_URL from "./../../../utils";

interface Category {
  id: string;
  name: string;
}

async function getData() {
  try {
    const result = await fetch(`${API_URL}/api/shop`);

    if (!result) {
      throw new Error("Failed to fetch data");
    }

    return await result.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function Page() {
  if (!API_URL) {
    return <p>API Is Not Defined</p>;
  }

  const data = await getData();
  console.log(data);

  return (
    <>
      <Header />
      <div className="h-[518px] flex justify-center items-center bg-lightGrey">
        <div className="m-8 ">
          <h3 className="text-3xl text-center font-light mx-0 my-4 py-4  border-b-2 border-black">
            Menu
          </h3>
          <div className="grid grid-cols-2 gap-y-8 gap-x-64">
            {data.map((product: Category) => (
              <Link key={product.id} href={`/shop/${product.id}`}>
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
