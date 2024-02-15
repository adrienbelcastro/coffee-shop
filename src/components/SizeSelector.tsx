import React from "react";
import { GiCoffeePot } from "react-icons/gi";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import { DiCoffeescript } from "react-icons/di";

const SizesSelector = () => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button className="flex flex-col items-center p-4 hover:bg-lightGrey rounded-full focus:bg-rose-50 ">
        <DiCoffeescript className="h-8 w-8" />
        <p>Small</p>
      </button>
      <button className="flex flex-col items-center p-4 hover:bg-lightGrey rounded-full focus:bg-rose-50">
        <BiSolidCoffeeTogo className="h-8 w-8" />
        <p>Medium</p>
      </button>
      <button className="flex flex-col items-center p-4 hover:bg-lightGrey rounded-full focus:bg-rose-50">
        <GiCoffeePot className="h-8 w-8" />
        <p>Large</p>
      </button>
    </div>
  );
};

export default SizesSelector;
