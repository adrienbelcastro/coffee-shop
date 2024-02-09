import React from "react";
import { FaCartPlus } from "react-icons/fa";

interface CustomizationOption {
  id: number;
  name: string;
  options_category: string;
  options?: { id: number; name: string }[];
}

interface ProductOptionsProp {
  customizationOptions?: CustomizationOption[];
}

const ProductOptions: React.FC<ProductOptionsProp> = ({
  customizationOptions,
}) => {
  console.log("customizationOptions:", customizationOptions);

  if (!customizationOptions || !customizationOptions.length) {
    return null;
  }

  return (
    <>
      <h3 className="text-3xl border-b-4 pb-4">What's Included</h3>
      <div className="flex flex-col gap-4 w-full mt-4">
        {customizationOptions.map((optionGroup) => {
          console.log("optionGroup:", optionGroup.id);

          if (!optionGroup) {
            console.log("Skipping invalid optionGroup:", optionGroup);
            return null;
          }

          return (
            <div key={optionGroup.options_category}>
              <h3>{optionGroup.options_category}</h3>
              <select className="w-full border-2 rounded-lg p-2">
                {optionGroup.options?.map((option) => {
                  console.log("option:", option);

                  // Additional check for individual options
                  if (!option || !option.id || !option.name) {
                    console.log("Skipping invalid option:", option);
                    return null;
                  }

                  return (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-8">
        <button className=" rounded-full p-4 bg-rose-50">
          <div className="flex items-center gap-2 ">
            <FaCartPlus /> <h1>Add To Order</h1>
          </div>
        </button>
      </div>
    </>
  );
};

export default ProductOptions;
