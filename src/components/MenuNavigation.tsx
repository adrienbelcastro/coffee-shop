"use client";

import React from "react";
import { fetchData } from "../lib/dbRequests/getData";
import { useEffect, useState } from "react";

const MenuNavigation: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Hot Drinks");
  const [menuData, setMenuItems] = useState<any[]>([]);
  const [displayedMenuItems, setDisplayedMenuItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await fetchData("/api/products");
        setMenuItems(result || []);
      } catch (error) {
        console.error("Error fetching data on the client:", error.message);
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
        <h1 className="text-6xl  text-center font-light">
          {displayedMenuItems[0].filters}
        </h1>
        <div className="flex justify-center py-8 flex-col">
          {displayedMenuItems.map((item, index) => (
            <div key={index} className="flex items-center flex-col">
              <h3 className="text-center text-3xl font-light">{item.name}</h3>
              <p className="w-2/5 text-center pt-2">{item.description}</p>
              <p className="w-2/5 text-center pt-2">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuNavigation;
