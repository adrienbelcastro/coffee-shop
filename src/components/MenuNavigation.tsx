"use client";
import React from "react";
import API_URL from "./../../utils";
import { useEffect, useState } from "react";

const MenuNavigation = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Hot Drinks");
  const [menuData, setMenuItems] = useState<any[]>([]);
  const [displayedMenuItems, setDisplayedMenuItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products`);
        const result = await response.json();
        setMenuItems(result || []);
      } catch (error) {
        console.error("Error fetching data on the client:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filteredItems =
      selectedFilter === "all"
        ? menuData
        : menuData.filter((item) => {
            return item.filters === selectedFilter;
          });

    setDisplayedMenuItems(filteredItems);
  }, [selectedFilter, menuData]);

  const filterData = (filter: string) => {
    setSelectedFilter(filter);
  };

  console.log(displayedMenuItems);

  return (
    <>
      <div className="bg-black flex justify-center gap-4 py-4">
        <button
          onClick={() => filterData("Hot Drinks")}
          className="text-white border-x-2 px-4 focus:text-blue-300"
        >
          HOT DRINKS
        </button>
        <button
          onClick={() => filterData("Cold Drinks")}
          className="text-white border-r-2 pr-4 focus:text-blue-300"
        >
          COLD DRINKS
        </button>
        <button
          onClick={() => filterData("Pastries")}
          className="text-white border-r-2 pr-4 focus:text-blue-300"
        >
          PASTRIES
        </button>
        <button
          onClick={() => filterData("Lunch & Dinner")}
          className="text-white border-r-2 pr-4 focus:text-blue-300"
        >
          LUNCH & DINNER
        </button>
        <button
          onClick={() => filterData("Breakfast")}
          className="text-white border-r-2 pr-4 focus:text-blue-300"
        >
          BREAKFAST
        </button>
      </div>
      <div className="py-8">
        {displayedMenuItems.length > 0 ? (
          <>
            <h1 className="text-6xl  text-center font-light">
              {displayedMenuItems[0].filters}
            </h1>
            <div className="flex justify-center py-8 flex-col">
              {displayedMenuItems.map((item, index) => (
                <div key={index} className="flex items-center flex-col py-4">
                  <h3 className="text-center text-3xl font-light">
                    {item.name}
                  </h3>
                  <p className="w-2/5 text-center pt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-3xl text-center font-light">No items found</p>
        )}
      </div>
    </>
  );
};

export default MenuNavigation;
