import React from "react";
import { useState } from "react";
import Results from "./Results";
import { useEffect } from "react";
import Image from "./Image";
import Trending from "./Trending";
import { useRef } from "react";

function Search(props) {
  const inputKeyword = useRef("");
  const [imgResult, setimgResult] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [trending, setTrending] = useState([]);
  let keywords;
  let trendingApi;

  async function getKeyWords() {
    keywords = await fetch(
      `https://apex.oracle.com/pls/apex/shaurya_sehgal/trending/keywords`
    );
    let convertedTrending = await keywords.json();
    setTrending(convertedTrending.items);
    console.log(convertedTrending.items);
  }

  const updateTrending = async () => {
    if (keyword === "") {
      return;
    }
    trendingApi = `https://apex.oracle.com/pls/apex/shaurya_sehgal/trending/keywords?keyword=${keyword}`;
    await fetch(trendingApi, { method: "POST" });
  };

  async function getImg() {
    console.log(inputKeyword.current.value);
    getKeyWords();
    updateTrending();
    setLoading(true);
    let data = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${
        inputKeyword.input.value == "" ? "mountains" : inputKeyword.input.value
      }&client_id=0aq7ngUJNo3Vy7arqwJehk2UJ1Xw6YZdgtAt0WSuxzs`
    );

    let convertedData = await data.json();
    let sampleImgResult = [];
    for (let i = 0; i < 10; i++) {
      sampleImgResult.push(convertedData.results[i].urls.regular);
    }
    setimgResult(sampleImgResult);
    setLoading(false);
    setPage(page + 1);
  }
  const updKeyword = (event) => {
    setKeyword(event.target.value);
  };
  function loadImgs() {
    getImg(page);
  }
  useEffect(() => {
    getKeyWords();
  }, []);

  return (
    <>
      <div className="container p-3">
        <div className="row">
          <div className="col text-center">
            <h1>Search</h1>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-6 m-auto text-center py-3 d-flex align-items-center justify-content-around">
            <input
              ref={inputKeyword}
              placeholder="Search for images"
              onChange={updKeyword}
              value={keyword}
              type="text"
              name=""
              id=""
              className="search w-50 rounded p-2"
            />
            <button className="fs-5 rounded p-1 px-2" onClick={getImg}>
              Get Results
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            {trending.map((element, index) => {
              return (
                <Trending
                  trendingKeyword={element.keyword}
                  key={index}
                  getImg={getImg}
                  setKeyword={setKeyword}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {imgResult.map((element, index) => {
            return <Image key={index} url={element} />;
          })}
        </div>
        <div className="row">
          <div className="col-6 m-auto my-3">
            <button
              disabled={loading}
              className="btn btn-primary w-100"
              onClick={loadImgs}
            >
              Next Page({page})
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
