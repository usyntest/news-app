import React, { useState, useEffect } from "react";
import { CategoryFetch } from "./CategoryFetch";
import { Link } from "react-router-dom";

const CategorySection = ({ category }) => {
  // useState for data fetched from api
  const [response, setResponse] = useState([]);

  // useEffect running everytime component renders
  useEffect(() => {
    CategoryFetch(category, 2).then((res) => setResponse(res));
  }, []);

  let urlToCategory = "/category/" + category;
  // each post inside section
  const SectionPost = ({ elm }) => {
    return (
      <div className="category-section-post h-full w-1/2 rounded-xl bg-blue-500">
        <a href={elm.url} className="hover:opacity-1 opacity-75">
          {/* if else statement to datermine if api data had a img for the news or not */}
          <img
            src={
              elm.urlToImage
                ? elm.urlToImage
                : "https://www.freeiconspng.com/uploads/no-image-icon-6.png"
            }
            className="h-full w-full rounded-xl"
            alt=""
          />
        </a>
      </div>
    );
  };

  // main return statement
  return (
    <div
      className={"category-section h-72 w-full rounded-xl " + category}
      style={{ marginTop: "4rem" }}
    >
      <div className="category-section-header h-1/6 w-full border-b rounded-xl flex items-center justify-between px-4 border-gray-200 bg-gray-600 mb-2">
        <h1 className="text-xl text-white font-bold">{category}</h1>
        <Link className="hover:text-blue-500 text-blue-200" to={urlToCategory}>
          View All
        </Link>
      </div>

      <div className="w-full h-5/6 flex gap-2 sm:flex-nowrap">
        {/* mapping over response received from the fetch function if received more than two all the interface will mess up */}
        {response.map((elm, index) => (
          <SectionPost elm={elm} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
