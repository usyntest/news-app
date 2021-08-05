import React from "react";

const CategoryPost = ({ elm }) => {
  console.log(elm);
  // script for removing author name from the end of the title
  //   let title = "";
  //   for (let i = elm.title.length; i >= 0; i--) {
  //     if (elm.title[i] === "-") {
  //       title = elm.title.slice(0, i);
  //       break;
  //     }
  //   }

  return <h1>{elm.title}</h1>;
};

export default CategoryPost;
