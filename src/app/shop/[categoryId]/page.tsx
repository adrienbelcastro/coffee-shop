import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "../../../../node_modules/next/link";

type Product = {
  product_id: number;
  name: string;
};

type Props = {
  categoryId: number;
  products: Product[];
};

export async function fetchProducts({
  categoryId,
  slug,
}: {
  categoryId: number;
  slug?: string;
}) {
  const result = await fetch(`http://localhost:3000/api/shop/${categoryId}`);

  if (!result) {
    throw new Error("Failed to fetch data");
  }

  return result.json();
}

export default async function Page({
  params,
  searchParams,
}: {
  params?: { categoryId: number; slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  if (!params) {
    // Handle the case where params is undefined
    return <div>Loading...</div>;
  }

  const { categoryId } = params;
  const data = await fetchProducts({ categoryId, slug: searchParams?.slug });

  return (
    <>
      <Header />
      <div className="flex justify-center  bg-lightGrey h-[518px]">
        <div className="m-8 ">
          <h3 className="text-center text-3xl font-light mx-0 my-4 py-4  border-b-2 border-black">
            Menu
          </h3>

          <div className="grid grid-cols-2 gap-y-8 gap-x-64">
            {data.map((product) => (
              <Link href={`/shop/${categoryId}/${product.product_id}`}>
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
