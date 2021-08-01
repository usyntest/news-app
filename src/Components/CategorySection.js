import React from "react";

const CategorySection = ({ category }) => {
  return (
    <div
      className={
        "category-section bg-gray-600 h-72 w-full border rounded-xl " + category
      }
      style={{ marginTop: "2rem" }}
    >
      <div className="category-section-header h-1/6 w-full border-b flex items-center justify-between px-4 border-gray-200">
        <h1 className="text-xl text-white font-bold">{category}</h1>
        <a href="#" className="hover:text-blue-500 text-blue-200">
          View All
        </a>
      </div>

      <div className="w-full h-5/6 flex">
        <div className="category-section-post h-full w-1/2 rounded-bl-xl bg-blue-500"></div>
        <div className="category-section-post h-full w-1/2 rounded-br-xl bg-red-500"></div>
      </div>
    </div>
  );
};

export default CategorySection;
