import React from "react";
import { FaCartPlus } from "react-icons/fa";

interface Option {
  option_id: number;
  options_name: string;
  description: string;
  choices: Choice[];
}

interface Props {
  optionsData: Option[];
}

interface Choice {
  choice_name: string;
  prices: Price[];
}

interface Price {
  price: number;
}
const ProductOptions = ({ optionsData }: Props) => {
  if (!optionsData || !optionsData.length) {
    return null;
  }
  console.log;
  return (
    <>
      <h3 className="text-3xl border-b-4 pb-4">What's Included</h3>
      <div className="flex flex-col gap-4 w-full mt-4">
        {optionsData.map((option, index) => (
          <div key={index}>
            <h3>{option.description}</h3>
            <select className="w-full border-2 rounded-lg p-2">
              <option value="">Select Option</option>
              {option.choices.map((choice, choiceIndex) => (
                <option key={choiceIndex} value={choice.choice_name}>
                  {choice.choice_name}
                  {choice.prices.length > 0 && (
                    <span> - ${choice.prices[0].price.toFixed(2)}</span>
                  )}
                </option>
              ))}
            </select>
          </div>
        ))}
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
