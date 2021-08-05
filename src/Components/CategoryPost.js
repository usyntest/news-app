import React from "react";

const CategoryPost = ({ elm }) => {
  // script for removing author name from the end of the title
  let title = "";
  for (let i = elm.title.length; i >= 0; i--) {
    if (elm.title[i] === "-") {
      title = elm.title.slice(0, i);
      break;
    }
  }

  return (
    <div className="h-48 w-0.9 bg-gray-300 rounded-xl p-4 flex justify-between mt-4 mx-2">
      <div className="category-post-img h-full w-2/5">
        <img
          src={
            elm.urlToImage
              ? elm.urlToImage
              : "https://www.freeiconspng.com/uploads/no-image-icon-6.png"
          }
          alt=""
          className="h-full w-full rounded-xl"
        />
      </div>
      <div className="category-post-content w-3/5 h-full flex flex-col justify-between ml-4">
        <div>
          <h1 className="text-lg pb-2">{title}</h1>
          <span className="block italic">
            {elm.author ? "- " + elm.author : "- unknown"}
          </span>
        </div>
        <a
          href={elm.url}
          className="text-right text-blue-500 hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default CategoryPost;
