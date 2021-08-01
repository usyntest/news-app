import React, { useEffect, useState } from "react";
import axios from "axios";

// COMPONENTS
import Loader from "./Loader";

const Banner = () => {
  const [response, setResponse] = useState([]);

  async function getData() {
    try {
      let res = await axios({
        url: "https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=6705ce8cd4b54b628b152ddb87e51f4b",
        method: "get",
      });
      return res.data.articles;
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData().then((res) => setResponse(res));
  }, []);

  return (
    // bg-purple-200
    <div className="banner w-full  h-64 sm:h-76 rounded-b-xl">
      {/* {response ? <BannerRender /> : <Loader />} */}
      {response.map((elm, index) => {
        return <BannerPost elm={elm} index={index} key={Math.random()} />;
      })}
    </div>
  );
};

const BannerPost = ({ elm, index }) => {
  let title = "";
  for (let i = elm.title.length; i >= 0; i--) {
    if (elm.title[i] === "-") {
      title = elm.title.slice(0, i);
      break;
    }
  }
  title = title.length > 64 ? title.slice(0, 63) + "..." : title;
  return (
    <div
      className={
        index === 1
          ? "banner-post h-full w-full relative rounded-b-xl"
          : "banner-post h-full w-full relative rounded-b-xl hidden "
      }
    >
      {elm.urlToImage != null ? (
        <img
          className="sm:max-h-full sm:w-full w-full h-64 opacity-75 hover:opacity-80 rounded-b-xl"
          src={elm.urlToImage}
          alt=""
        />
      ) : (
        <h1 className="max-h-full w-full">Error</h1>
      )}
      <div className="absolute bottom-3 sm:bottom-4 left-4 ">
        <a href={elm.url}>
          <p className="antialiased lg:overflow-cliptruncate sm:subpixel-antialiased md:antialiaseds text-lg sm:text-xl font-bold hover:underline text-gray-100">
            <span className="text-sm block no-underline">
              {elm.source.name}
            </span>
            {title}
          </p>
        </a>

        <span className="text-blue-700 text-base hover:underline font-bold">
          <a href={elm.url}>Read more</a>
        </span>
      </div>

      <button
        className="banner-btn absolute top-20 sm:top-28 left-0"
        onClick={prev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#e3e0cf"
          className="icon-svg sm:h-12 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="banner-btn absolute top-20 sm:top-28 right-0"
        onClick={next}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#e3e0cf"
          className="icon-svg sm:h-12 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

const next = (e) => {
  let target = e.target;
  let parentNode =
    target.parentNode.parentNode.classList[0] === "banner-post"
      ? target.parentNode.parentNode
      : null;
  if (!parentNode) {
    return;
  }
  parentNode.classList.add("hidden");

  let nextNode = parentNode.nextSibling;
  if (nextNode) {
    nextNode.classList.remove("hidden");
    return;
  }
  parentNode = parentNode.parentNode;
  parentNode.firstChild.classList.remove("hidden");
};
const prev = (e) => {
  let target = e.target;
  let parentNode =
    target.parentNode.parentNode.classList[0] === "banner-post"
      ? target.parentNode.parentNode
      : null;
  if (!parentNode) {
    return;
  }
  parentNode.classList.add("hidden");

  let prevNode = parentNode.previousSibling;
  if (prevNode) {
    prevNode.classList.remove("hidden");
    return;
  }
  parentNode = parentNode.parentNode;
  parentNode.lastChild.classList.remove("hidden");
};

export default Banner;
