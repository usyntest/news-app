import React, { useState, useEffect } from "react";
import { CategoryFetch } from "./CategoryFetch";
import CategoryPost from "./CategoryPost";

const CategoryPage = ({ match }) => {
  // useState for response
  const [response, setResponse] = useState([]);

  // useEffect running very render
  useEffect(() => {
    CategoryFetch(match.params.type, 30).then((res) => setResponse(res));
    // console.log(response);
  }, []);

  return (
    <div className="category-page min-h-screen w-screen sm:w-1/2 bg-blue-500 border-r border-l border-gray-200">
      <div className="heading-category-page">
        <h1 className="text-white text-2xl font-bold py-2 px-2 border-b border-gray-200">{match.params.type} / popular reads</h1>
      </div>
      <div className="category-page-posts">
        {/* {response.map((elm, index) => {
          return <CategoryPost elm={elm} key={index} />;
        })} */}
        <CategoryPost elm={response[0]}/>
      </div>
    </div>
  );
};

export default CategoryPage;
