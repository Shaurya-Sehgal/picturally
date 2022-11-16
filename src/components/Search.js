import React from "react";
import { useState } from "react";
import Results from "./Results";
import { useEffect } from "react";
import Image from "./Image";

function Search(props) {
  const [imgResult, setimgResult] = useState([]);
  const [keyword, setKeyword] = useState("");
  // const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  let page = 1;
  // useEffect(() => {
  //   getImg();
  // }, []);

  async function getImg(page) {
    setLoading(true);
    console.log("working");
    let data = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${
        keyword == "" ? "mountains" : keyword
      }&client_id=0aq7ngUJNo3Vy7arqwJehk2UJ1Xw6YZdgtAt0WSuxzs`
    );
    let convertedData = await data.json();
    console.log(convertedData);
    let sampleImgResult = [];
    for (let i = 0; i < 10; i++) {
      sampleImgResult.push(convertedData.results[i].urls.regular);
    }
    console.log(sampleImgResult);
    setimgResult(sampleImgResult);
    console.log(imgResult);
    setLoading(false);
  }
  const updKeyword = (event) => {
    setKeyword(event.target.value);
  };
  function loadImgs() {
    page = page + 1;
    getImg(page);
  }
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
          {imgResult.map((element, index) => {
            return <Image key={index} url={element} />;
          })}
        </div>
        <div className="row">
          {/* <div className="col-6 m-auto my-3">
            <button
              className="btn btn-primary w-100"
              onClick={loadImgs("previous")}
            >
              Previous Page({page})
            </button>
          </div> */}
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
