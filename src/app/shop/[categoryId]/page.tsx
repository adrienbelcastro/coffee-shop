"use client";

import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";
import { useParams } from "../../../../node_modules/next/navigation";
import Link from "../../../../node_modules/next/link";

const Page: React.FC = () => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await fetch(
          `http://localhost:3000/api/shop/${categoryId}`
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
      <div className="flex gap-12 bg-lightGrey">
        <div className="m-8">
          <Sidebar />
        </div>
        <div className="m-8 ">
          <h3 className="text-3xl font-light mx-0 my-4 py-4  border-b-2 border-black">
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
};

export default Page;
