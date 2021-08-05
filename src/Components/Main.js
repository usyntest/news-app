import React from "react";

// COMPONENTS
import Banner from "./Banner";
import CategorySection from "./CategorySection";
import { categories } from "./categories";

const Main = () => {
  return (
    <div
      className="main w-full bg-red-300 sm:w-1/2  border-r border-l border-gray-100"
      style={{ backgroundColor: "#e3e0cf" }}
    >
      <Banner />
      <div className="category-posts w-full rounded-lg ">
        {categories.map((elm, index) => {
          return <CategorySection category={elm} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Main;
