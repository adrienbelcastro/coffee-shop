import Footer from "@/components/footer";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center max-w-full min-w-full min-h-[575px] max-h-[600px] bg-hero_image bg-center bg-cover">
        <div className="flex justify-center bg-black min-w-[280px] max-w-[300px] min-h-[180px] max-h-[200px]">
          <h1 className="text-white text-6xl font-light pt-2">MENU</h1>
        </div>
      </div>
      <div className="bg-black flex justify-center gap-4 py-4">
        <h1 className="text-white border-x-2 px-4">HOT DRINKS</h1>
        <h1 className="text-white border-r-2 pr-4">COLD DRINKS</h1>
        <h1 className="text-white">PASTRIES</h1>
      </div>
      <div className="py-8">
        <h1 className="text-6xl  text-center font-light">Hot Drinks</h1>
        <div className="flex justify-center py-8 flex-col">
          <div className="flex items-center flex-col">
            <h3 className="text-center text-3xl font-light">In-house brew</h3>
            <p className="w-2/5 text-center pt-2">
              Our in-house medium roast is a classic balance between sweet
              vanilla, nutty hazelnut, and a smooth low acidity to bring every
              thing together.
            </p>
            <p className="w-2/5 text-center pt-2">$2.99</p>
          </div>
          <div className="flex items-center flex-col pt-8">
            <h3 className="text-center text-3xl font-light">In-house brew</h3>
            <p className="w-2/5 text-center pt-2">
              Our in-house medium roast is a classic balance between sweet
              vanilla, nutty hazelnut, and a smooth low acidity to bring every
              thing together.
            </p>
            <p className="w-2/5 text-center pt-2">$2.99</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
