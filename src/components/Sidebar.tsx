import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col">
        <h1 className="text-3xl">Drinks</h1>
        <h3>Hot Drinks</h3>
        <h3>Cold Drinks</h3>
      </div>
      <div>
        <h1 className="text-3xl">Take-Home</h1>
        <h3>Whole Bean</h3>
        <h3>Ground</h3>
      </div>
      <div>
        <h1 className="text-3xl">Merchandise</h1>
        <h3>Cold Cups</h3>
        <h3>Canteens</h3>
      </div>
      <div>
        <h1 className="text-3xl">Food</h1>
        <h3>Pastries</h3>
      </div>
    </div>
  );
};

export default Sidebar;
