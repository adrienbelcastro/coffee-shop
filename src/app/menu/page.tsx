import Footer from "@/components/footer";
import Header from "@/components/Header";
import MenuNavigation from "@/components/MenuNavigation";
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
      <MenuNavigation />
      <Footer />
    </>
  );
};

export default page;
