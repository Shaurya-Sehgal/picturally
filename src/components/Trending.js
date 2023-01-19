import React from "react";

function Trending(props) {
  return (
    <>
      <span
        className="bg-secondary rounded-pill px-3 py-2 mx-2 bg-opacity-25"
        onClick={() => {
          props.setKeyword(props.trendingKeyword);
          props.getImg();
          props.getImg();
        }}
      >
        {props.trendingKeyword}
      </span>
    </>
  );
}

export default Trending;
