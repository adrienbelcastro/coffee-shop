import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import Sidebar from "@/components/sidebar";

const Page: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex gap-12 bg-lightGrey">
        <div className="m-8">
          <Sidebar />
        </div>
        <div className="m-8 ">
          <h3 className="text-3xl font-light">Menu</h3>
          <h3 className="text-3xl mx-0 my-4 py-4 font-light border-b-2 border-black">
            Drinks
          </h3>
          <div className="grid grid-cols-2 gap-y-8 gap-x-64">
            <div className="flex gap-4 items-center">
              <div className="bg-white w-24 h-24 p-4 border-2 border-white rounded-[50%]"></div>
              <h3>In-house Brew</h3>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-white w-24 h-24 p-4 border-2 border-white rounded-[50%]"></div>
              <h3>Espresso</h3>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-white w-24 h-24 p-4 border-2 border-white rounded-[50%]"></div>
              <h3>In-house Brew</h3>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-white w-24 h-24 p-4 border-2 border-white rounded-[50%]"></div>
              <h3>In-house Brew</h3>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-white w-24 h-24 p-4 border-2 border-white rounded-[50%]"></div>
              <h3>In-house Brew</h3>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-white w-24 h-24 p-4 border-2 border-white rounded-[50%]"></div>
              <h3>In-house Brew</h3>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-white w-24 h-24 p-4 border-2 border-white rounded-[50%]"></div>
              <h3>In-house Brew</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
