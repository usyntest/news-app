import axios from "axios";

// async function for fetching data with axios according to category and pagesize
export const CategoryFetch = async (category, pageSize = 10) => {
  try {
    let res = await axios({
      url: `https://newsapi.org/v2/top-headlines?country=in&pageSize=${pageSize}&category=${category}&apiKey=6705ce8cd4b54b628b152ddb87e51f4b`,
      method: "get",
    });
    // just returning the articles part from the data received as the other part is not needed
    return res.data.articles;
  } catch (err) {
    console.error(err);
  }
};
