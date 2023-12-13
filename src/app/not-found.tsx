import React from "react";
import Cup from "../../public/assets/coffeebeans-hero.png";
import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <div className="flex justify-center items-center bg-rose-50 h-screen">
        <div className="flex justify-around items-center p-12">
          <div>
            <h1 className="text-6xl font-light">404...</h1>
            <h3 className="text-3xl font-light py-2">Look at the mess :/</h3>
            <p className="w-6/12 font-light">
              It seems like something went wrong. Why don't we start over again,
              click the button to return home.
            </p>
            <button className="mt-8 mb-10 px-10 py-4 bg-blue-400">
              Return Home
            </button>
          </div>
          <Image src={Cup} alt="Cup" />
        </div>
      </div>
    </>
  );
}
