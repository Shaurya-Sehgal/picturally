import React from "react";
import { useState } from "react";
import Image from "./Image";

function Results() {
  async function getImg() {
    let data = await fetch(
      "https://api.unsplash.com/search/photos?query=coding&client_id=0aq7ngUJNo3Vy7arqwJehk2UJ1Xw6YZdgtAt0WSuxzs"
    );
    let convertedData = await data.json();
    console.log(convertedData);
    let sampleImgResult = [];
    for (let i = 0; i < 10; i++) {
      sampleImgResult.push(convertedData.results[i].urls.regular);
    }
    setimgResult(sampleImgResult);
  }
  const [imgResult, setimgResult] = useState([
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
  ]);
  return (
    <>
      <button onClick={getImg}>Get Results</button>
      <div className="container">
        <div className="row">
          {imgResult.map((element, index) => {
            return <Image key={index} something={element} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Results;
