import React from "react";

function Image(props) {
  const copyAddress = () => {
    navigator.clipboard.writeText(props.url);
  };
  return (
    <div className="col-4 p-2 text-center">
      <a href={props.url} target="_blank">
        <img className="w-100 my-3" src={props.url} alt="" />
      </a>
      <button className="btn btn-primary w-100" onClick={copyAddress}>
        Copy Address
      </button>
    </div>
  );
}

export default Image;
