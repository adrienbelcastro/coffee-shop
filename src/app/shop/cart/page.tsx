import Footer from "@/components/footer";
import Header from "@/components/Header";
import React from "react";

const Cart = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <div className="bg-rose-50 w-[50%] m-16">
          <div className="flex flex-col gap-4 pl-8 py-4">
            <h1 className="text-3xl font-light pl-8 py-4 bor">Shopping Bag</h1>
            <div className="flex gap-4 items-center ">
              <div className="bg-white w-24 h-24 p-4 border-2 border-white rounded-[50%]"></div>
              <h3>Espresso</h3>
              <select className="border-2 rounded-lg p-2">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-white w-24 h-24 p-4 border-2 border-white rounded-[50%]"></div>
              <h3>In-house Brew</h3>
              <select className="border-2 rounded-lg p-2">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-white w-24 h-24 p-4 border-2 border-white rounded-[50%]"></div>
              <h3>In-house Brew</h3>
              <select className="border-2 rounded-lg p-2">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-white w-24 h-24 p-4 border-2 border-white rounded-[50%]"></div>
              <h3>In-house Brew</h3>
              <select className="border-2 rounded-lg p-2">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col items-center justify-center">
          <div className=" bg-rose-50 w-[50%] m-8">
            <div className="flex justify-between p-6">
              <div className="flex flex-col gap-4">
                <h1 className="text-xl">Subtotal</h1>
                <h3>Shipping</h3>
                <h3>Tax</h3>
              </div>
              <div className="flex flex-col gap-4">
                <h3>$13.99</h3>
                <h3>Free</h3>
                <h3>$1.50</h3>
              </div>
            </div>
            <div className="flex justify-between border-t-4 pt-4 m-6">
              <h1 className="text-xl">Total</h1>
              <h3>$15.49</h3>
            </div>
            <div className="flex justify-center">
              <button className="w-[100%] p-4 m-4 bg-white">Checkout</button>
            </div>
          </div>
          <div className=" bg-rose-50 w-[50%]">
            <h1 className="text-xl font-semibold pl-4 pt-4">Discount</h1>
            <form className="w-[100%] mx-5 my-4">
              <input
                className="bg-white p-4 rounded-lg w-[75%}"
                type="code"
                name="code"
                placeholder="Code"
              ></input>
              <button className=" w-[25%] p-4 mx-2 bg-white">Apply</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
