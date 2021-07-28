import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

// COMPONENTS
import BannerPost from "./BannerPost";

// CSS
import "./Banner.css";

const Banner = () => {
  const [response, setResponse] = useState("");

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

  const BannerResult = () => {
    return (
      <div className="banner-posts">
        {response.map((element, index) => {
          return (
            <BannerPost
              active={index === 0 ? true : false}
              title={element.title}
              img={element.urlToImage}
              key={Math.random()}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="banner">{response ? <BannerResult /> : <Loading />}</div>
  );
};

const Loading = () => {
  return (
    <div className="loadingio-spinner-spinner-tx6x8mwyid">
      <div className="ldio-iin4r9oe6b">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Banner;

// let dateFrom = getDate(1);
// let dateTo = getDate();
// const getDate = (to = 0) => {
//   let date = new Date();
//   let string = `20${date.getYear() - 100}-0${date.getMonth() + 1}-${
//     date.getDate() - to
//   }`;
//   console.log(string);
//   return string;
// };
